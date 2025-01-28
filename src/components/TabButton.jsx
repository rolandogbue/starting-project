export default function TabButton({ children, isSelected, ...attributes }) {
	return (
		<li>
			<button className={isSelected ? "active" : undefined} {...attributes}>
				{children}
			</button>
		</li>
	);
}
