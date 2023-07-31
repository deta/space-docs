import type { ComponentChildren } from 'preact';
import { useEffect, useLayoutEffect, useRef } from 'preact/hooks';

import { genTabId } from './store';
import './TabGroup.css';
import styles from './Tabs.module.css';
import { useTabState } from './useTabState';

const panelSlotKey = 'panel.' as const;

type PanelSlot = `${typeof panelSlotKey}${string}`;

function isPanelSlotEntry(entry: [string, ComponentChildren]): entry is [PanelSlot, ComponentChildren] {
	const [key] = entry;
	return key.startsWith(panelSlotKey);
}

function getBaseKeyFromPanel(slot: PanelSlot) {
	return slot.replace(new RegExp(`^${panelSlotKey}`), '');
}

type Tab = {
	label: string;
	value: string;
}

type Props = {
	[key: PanelSlot]: ComponentChildren;
	sharedStore?: string;
	defaultPanel?: string;
	tabs: Tab[];
};

export default function Tabs({ sharedStore, defaultPanel, tabs, ...slots }: Props) {
	const tabId = genTabId();
	const panels = Object.entries(slots).filter(isPanelSlotEntry);
	/** Used to focus next and previous tab on arrow key press */
	const tabButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
	const scrollToTabRef = useRef<HTMLButtonElement | null>(null);
	const tabButtonContainerRef = useRef<HTMLDivElement | null>(null);
	const activeTabIndicatorRef = useRef<HTMLSpanElement | null>(null);

	const defaultPanelFound = panels.find(([key]) => key === `panel.${defaultPanel}`)
	const firstPanelKey = defaultPanelFound !== undefined ? defaultPanelFound[0] : panels[0]?.[0] ?? '';
	const [curr, setCurr] = useTabState(getBaseKeyFromPanel(firstPanelKey), sharedStore);

	useEffect(( ) => {
		const searchParams = new URLSearchParams(window.location.search);
		const tabSlot = searchParams.get(sharedStore || 'tab');
		const existingTab = tabs.some((tab) => tab.value === tabSlot);
		if (tabSlot && existingTab) setCurr(tabSlot);
	}, []);

	function updateCurr(tabSlot: string, el: HTMLButtonElement | null) {
		if (sharedStore) {
			// Prevents scroll jumping due to layout shift
			// from other tab views with the same store
			scrollToTabRef.current = el;
		}

		setCurr(tabSlot);
	}

	useEffect(() => {
		if (scrollToTabRef.current) {
			const y = scrollToTabRef.current.getBoundingClientRect().top + window.scrollY - 100;
			window.scrollTo({top: y, behavior: 'smooth'});
			scrollToTabRef.current = null;
		}
	}, [curr]);

	useLayoutEffect(() => {
		// Fancy indicator animation
		const activeTab = tabButtonRefs?.current[`tab.${curr}`];
		if (activeTabIndicatorRef.current && tabButtonContainerRef.current && activeTab) {
			const tabBoundingRect = activeTab.getBoundingClientRect();
			const containerBoundingRect = tabButtonContainerRef.current.getBoundingClientRect();
			if (!activeTabIndicatorRef.current.style.width) activeTabIndicatorRef.current.style.width = '1px';
			activeTabIndicatorRef.current.style.transform = `translateX(${tabBoundingRect.left - containerBoundingRect.left}px) scaleX(${tabBoundingRect.width})`;
		}
	}, [curr]);

	function moveFocus(event: KeyboardEvent) {
		if (event.key === 'ArrowLeft') {
			const currIdx = tabs.findIndex(tab => tab.value === curr);
			if (currIdx > 0) {
				const { value: prevTabKey } = tabs[currIdx - 1];
				updateCurr(prevTabKey, tabButtonRefs.current[prevTabKey]);
				tabButtonRefs.current[prevTabKey]?.focus();
			}
		}
		if (event.key === 'ArrowRight') {
			const currIdx = tabs.findIndex(tab => tab.value === curr);
			if (currIdx < tabs.length - 1) {
				const { value: nextTabKey } = tabs[currIdx + 1];
				updateCurr(nextTabKey, tabButtonRefs.current[nextTabKey]);
				tabButtonRefs.current[nextTabKey]?.focus();
			}
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles['tab-scroll-overflow']}>
				<div ref={tabButtonContainerRef} className={`${styles.tablist} TabGroup no-flex`} role="tablist" onKeyDown={moveFocus}>
					{tabs.map((tab) => (
						<button
							ref={(el) => (tabButtonRefs.current[tab.value] = el)}
							onClick={() => updateCurr(tab.value, tabButtonRefs.current[tab.value])}
							aria-selected={curr === tab.value}
							tabIndex={curr === tab.value ? -1 : 0}
							role="tab"
							type="button"
							className={styles.tab}
							id={`${tabId}-${tab.value}`}
							key={tab.value}
						>
							{tab.label}
						</button>
					))}
					<span ref={activeTabIndicatorRef} className={styles.selectedIndicator} aria-hidden="true" />
				</div>
			</div>
			{panels.map(([key, content]) => (
				<div hidden={curr !== getBaseKeyFromPanel(key)} role="tabpanel" aria-labelledby={`${tabId}-${getBaseKeyFromPanel(key)}`} className={styles.tabpanel} key={key}>
					{content}
				</div>
			))}
		</div>
	);
}