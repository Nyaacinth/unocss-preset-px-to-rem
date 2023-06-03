import { Preset } from '@unocss/core';

interface PxToRemOptions {
    /**
     * 1rem = n px
     * @default 16
     */
    baseFontSize?: number;
}
declare function pxToRemPreset(options?: PxToRemOptions): Preset;

export { PxToRemOptions, pxToRemPreset as default };
