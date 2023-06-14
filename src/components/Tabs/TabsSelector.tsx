import type { ComponentChildren } from 'preact';
import { useEffect, useRef } from 'preact/hooks';

import './TabsSelector.scss';
import { useTabState } from './useTabState';

const panelSlotKey = 'panel.' as const;
type PanelSlot = `${typeof panelSlotKey}${string}`;

type Tab = {
	label: string;
	value: string;
}

type Props = {
	[key: PanelSlot]: ComponentChildren;
	sharedStore?: string;
	defaultTab?: string;
	placeholder?: string;
	tabs: Tab[];
};

export default function Tabs({ placeholder, sharedStore, defaultTab, tabs, ...slots }: Props) {
	const scrollToTabRef = useRef<HTMLButtonElement | null>(null);

	const [curr, setCurr] = useTabState(defaultTab || tabs[0].value, sharedStore);

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

	return (
		<div className="select">
			<select value={curr} onChange={(e) => updateCurr(e.currentTarget.value, null)}>
				<option disabled value="">{placeholder || 'Select a tab'}</option>
				{tabs.map((tab) => (
					<option value={tab.value} key={tab.value}>
						{tab.label}
					</option>
				))}
			</select>
		</div>
	);
}