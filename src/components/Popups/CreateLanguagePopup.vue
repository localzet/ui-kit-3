<template>
    <PopupWrapper name="create-language">
        <!--Title-->
        <PopupHeader :title="$t('create_language')" icon="edit" />

        <!--Content-->
        <PopupContent class="!overflow-initial">
            <!--Form to set sharing-->
            <ValidationObserver @submit.prevent="createLanguage" ref="createForm" v-slot="{ invalid }" tag="form">
                <ValidationProvider
                    tag="div"
                    mode="passive"
                    name="Language Locale"
                    rules="required"
                    v-slot="{ errors }"
                >
                    <AppInputText :title="$t('select_locale')" :error="errors[0]">
                        <SelectInput
                            v-model="form.locale"
                            :options="locales"
                            :placeholder="$t('select_language_locale')"
                            :isError="errors[0]"
                        />
                    </AppInputText>
                </ValidationProvider>
                <ValidationProvider tag="div" mode="passive" name="Language Name" rules="required" v-slot="{ errors }">
                    <AppInputText :title="$t('locale_name')" :error="errors[0]" :is-last="true">
                        <input
                            v-model="form.name"
                            :class="{ '!border-rose-600': errors[0] }"
                            type="text"
                            ref="input"
                            class="focus-border-theme input-dark"
                            :placeholder="$t('type_language_name')"
                        />
                    </AppInputText>
                </ValidationProvider>
            </ValidationObserver>
        </PopupContent>

        <!--Actions-->
        <PopupActions>
            <ButtonBase class="w-full" @click.native="$closePopup()" button-style="secondary">
                {{ $t('cancel') }}
            </ButtonBase>
            <ButtonBase
                class="w-full"
                @click.native="createLanguage"
                button-style="theme"
                :loading="isLoading"
                :disabled="isLoading"
            >
                {{ $t('create_language') }}
            </ButtonBase>
        </PopupActions>
    </PopupWrapper>
</template>

<script>
import AppInputText from '../Forms/Layouts/AppInputText'
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full'
import PopupWrapper from './Components/PopupWrapper'
import PopupActions from './Components/PopupActions'
import PopupContent from './Components/PopupContent'
import PopupHeader from './Components/PopupHeader'
import SelectInput from '../Inputs/SelectInput'
import ButtonBase from '../UI/Buttons/ButtonBase'
import { required } from 'vee-validate/dist/rules'
import { events } from '../../bus'
import axios from 'axios'

export default {
    name: 'CreateLanguagePopup',
    components: {
        ValidationProvider,
        ValidationObserver,
        AppInputText,
        PopupWrapper,
        PopupActions,
        PopupContent,
        PopupHeader,
        SelectInput,
        ButtonBase,
        required,
    },
    data() {
        return {
            form: {
                name: undefined,
                locale: undefined,
            },
            isLoading: false,
            locales: [
                {
                    value: 'en',
                    label: 'English',
                },
                {
                    value: 'ru',
                    label: '\u0420\u0443\u0441\u0441\u043a\u0438\u0439',
                },
            ],
        }
    },
    methods: {
        async createLanguage() {
            // Validate fields
            const isValid = await this.$refs.createForm.validate()

            if (isValid) {
                this.isLoading = true

                axios
                    .post('/api/admin/languages', this.form)
                    .then((response) => {
                        events.$emit('reload:languages', response.data)
                    })
                    .catch(() => {
                        this.$isSomethingWrong()
                    })
                    .finally(() => {
                        this.form = {
                            name: undefined,
                            locale: undefined,
                        }

                        this.isLoading = false
                        this.$closePopup()
                    })
            }
        },
    },
}
</script>
