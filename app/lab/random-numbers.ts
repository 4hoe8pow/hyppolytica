import { ChannelType, type RDouble, WebR } from "webr";

const webR = new WebR({
	baseUrl: "./node_modules/webr/dist/",
	channelType: ChannelType.PostMessage,
});

export async function getRandomNumbers() {
	await webR.init();
	const result = (await webR.evalR("rnorm(25,10,10)")) as RDouble;
	try {
		return await result.toArray();
	} finally {
		webR.destroy(result);
	}
}
