/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.reecosys.com",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;