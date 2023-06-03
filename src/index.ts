import type { Preset } from "@unocss/core"

const pxRE = /(-?[\.\d]+)px/g

export interface PxToRemOptions {
    /**
     * 1rem = n px
     * @default 16
     */
    baseFontSize?: number
}

export default function pxToRemPreset(options: PxToRemOptions = {}): Preset {
    const { baseFontSize = 16 } = options

    return {
        name: "@nyaacinth/unocss-preset-px-to-rem",
        postprocess: (util) => {
            util.entries.forEach((i) => {
                const value = i[1]
                if (value && typeof value === "string" && pxRE.test(value))
                    i[1] = value.replace(pxRE, (_, p1) => `${(p1 / baseFontSize).toFixed(5)}rem`)
            })
        }
    }
}
