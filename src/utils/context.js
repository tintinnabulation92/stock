export const getContext = () => { return `/${process.env.CONTEXT_PATH || ''}/api`.replace(/\/{2,}|\/$/g, '/') }

