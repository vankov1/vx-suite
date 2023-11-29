declare module 'vue' {
    export interface GlobalComponents {
        VxInputField: typeof import('vuetify/components')['VTextField'],
        VPrimaryButton: typeof import('vuetify/components')['VBtn'],
    }
}

export {}
