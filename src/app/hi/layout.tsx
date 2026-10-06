/** Hindi pages share the root layout, so this marks their language for browsers and search engines. */
export default function HindiLayout({ children }: LayoutProps<"/hi">) {
  return <div lang="hi">{children}</div>;
}
