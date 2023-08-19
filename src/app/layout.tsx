import './globals.css'
import FilterProvider from "../component/filterProvider";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <div id={'root'}>
            <FilterProvider>
                {children}
            </FilterProvider>
        </div>
        </body>
        </html>
    )
}
