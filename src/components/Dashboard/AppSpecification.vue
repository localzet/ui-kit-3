<template>
    <div class="mb-4 items-center justify-between md:mb-6">
        <div class="text-lg font-extrabold">
            {{ config.app_name || 'Zorin Storage Manager' }}
        </div>

        <!--App Info-->
        <div class="mt-4 flex items-center lg:mt-0">
            <b class="mr-4 inline-block">
                <span class="text-sm font-bold"> {{ $t('version') }}: </span>
                <ColorLabel color="purple">
                    {{ data.app.version }}
                </ColorLabel>
            </b>
            <b class="mr-4 inline-block">
                <span class="text-sm font-bold"> {{ $t('subscription') }}: </span>
                <ColorLabel color="purple">
                    {{ config.subscriptionType }}
                </ColorLabel>
            </b>
        </div>
    </div>
</template>
<script>
import ColorLabel from '../UI/Labels/ColorLabel'
import {mapGetters} from "vuex";

export default {
    name: 'AppSpecification',
    components: {
		ColorLabel,
	},
    props: {
        data: {},
    },
	computed: {
		...mapGetters(['config']),
	},
}
</script>
