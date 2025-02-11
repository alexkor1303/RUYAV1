import ContentLoader from 'react-content-loader'

const ProductSkeleton = props => (
	<ContentLoader
		speed={3}
		width={260}
		height={513}
		viewBox='0 0 260 513'
		backgroundColor='#e7badc'
		foregroundColor='#f1d9ec'
		{...props}
	>
		<rect x='10' y='20' rx='16' ry='16' width='240' height='220' />
		<rect x='10' y='282' rx='5' ry='5' width='113' height='14' />
		<rect x='10' y='255' rx='5' ry='5' width='131' height='18' />
		<rect x='10' y='306' rx='5' ry='5' width='49' height='23' />
		<rect x='10' y='349' rx='16' ry='16' width='240' height='86' />
		<rect x='11' y='464' rx='16' ry='16' width='115' height='40' />
		<rect x='134' y='464' rx='16' ry='16' width='115' height='40' />
	</ContentLoader>
)

export default ProductSkeleton
