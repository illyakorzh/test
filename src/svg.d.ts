declare module '*.svg' {
	import React from 'react';
	const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
	export { ReactComponent };
}
declare module '*.webp' {
	const content: string;
	export default content;
}
