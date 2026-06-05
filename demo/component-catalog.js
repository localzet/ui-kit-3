const modules = import.meta.glob('../src/components/**/*.vue', {
    eager: true,
    query: '?raw',
    import: 'default',
})

export const componentCatalog = Object.entries(modules)
    .map(([path, source]) => {
        const match = source.match(/name:\s*['"`]([^'"`]+)['"`]/)
        const parts = path.replace('../src/components/', '').split('/')

        return {
            name: match ? match[1] : parts[parts.length - 1].replace('.vue', ''),
            path: path.replace('../src/', 'src/'),
            group: parts.length > 1 ? parts[0] : 'Components',
        }
    })
    .sort((a, b) => a.name.localeCompare(b.name))
