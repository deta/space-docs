<a href="/canvas">
    <span>Open Canvas</span>
</a>

<style lang="scss">
    a {
        display: flex;
        justify-content: center;
        align-items: center;

        background: hsl(var(--color-gray-5));
        color: #fff;
        padding: var(--spacing-2) var(--spacing-3);
        border-radius: var(--rounded-3);
        border: 4px solid rgba(50, 48, 47, 0.7);
        box-shadow: 0px 0px 0px 2px rgba(50, 48, 47, 0.25);


        span {
            font-weight: 500;
            transition: all 0.05s ease-in-out, background 0.15s ease-in-out;
        }
    }

    a:hover {
        background: hsl(var(--color-gray-20));
        cursor: pointer;
    }
    a:active {
        background: hsl(var(--color-gray-30));
        span {
            //transform: scale(0.98);
        }
    }

    :global(html.theme-dark) a {
        background: hsl(var(--color-gray-20));
        border-color: hsl(var(--color-gray-30));
        color: #fff;

        &:hover {
            background: hsl(var(--color-gray-30));
        }
        &:active {
            background: hsl(var(--color-gray-40));
        }
    }
</style>