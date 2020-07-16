import staticConf from '../../../domain/config/config_handler'
import { ConfigKeyEnum } from "../../../domain/model/config"

const currentSupportedPaths = ["ssr", "csr", "netcore", "javaSpring", "netcoreSelenium",
    "jsTestcafe", "ssrGke", "aksInfra", "gkeInfra", "ssrGkeJenkins", "ssrGkeJenkins", "shared"]

const confKeys = Object.keys(staticConf)

describe("StaticConfig tests", () => {
    /**
     * this needs to be manually bumped on purpose everytime a new option is added
     */
    it("staticConf return an object with only specified keys", () => {
        expect(confKeys.length).toBe(12)
        expect(confKeys).toEqual(expect.arrayContaining(currentSupportedPaths))
        expect(Object.keys(ConfigKeyEnum)).toEqual(expect.arrayContaining(currentSupportedPaths.map(p => p.toUpperCase())))
    })
})