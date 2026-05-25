export const stringFormatters = (path: string) =>
    path.split("/")
        .filter(Boolean)
        .map((part) => {
            const noHyphens = part.replace(/-/g, " ");
            return noHyphens.charAt(0).toUpperCase() + noHyphens.slice(1);
        });
