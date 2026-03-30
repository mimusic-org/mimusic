interface WebAssemblyInstantiator {
    (importObject: Record<string, Record<string, WebAssembly.ImportValue>> | undefined): Promise<WebAssemblyInstance>;
}
type WebAssemblyInstance = WebAssembly.WebAssemblyInstantiatedSource | WebAssembly.Instance | WebAssembly.Instance['exports'];

declare const wasmBinary: ArrayBuffer;
declare const getWasmInstance: WebAssemblyInstantiator;

export { getWasmInstance as default, getWasmInstance, wasmBinary };
