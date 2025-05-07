interface Props {
	children: React.ReactNode;
	className?: string;
}

export const Container = ({ children, className = "" }: Props) => {
	return (
		<div className={`max-w-7xl mx-auto py-8 px-4 ${className}`}>{children}</div>
	);
};
