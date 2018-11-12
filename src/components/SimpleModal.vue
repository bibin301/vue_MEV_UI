<template>
    <div>
        <Button type="primary" @click="modal6 = true">Display dialog box</Button>
        <Modal
            v-model="modal6"
            :title="title"
			:ok-text="ok-text"
			:cancel-text="cancel-text"
			:on-ok="on-ok"
			:on-cancel="on-cancel"
            :loading="loading"
            @on-ok="asyncOK">
            <p>After you click ok, the dialog box will close in 2 seconds.</p>
        </Modal>
    </div>
</template>
<script>
    export default {
        props: ['button', 'title', 'ok-text', 'cancel-text', 'on-ok', 'on-cancel'],
        data () {
            return {
                modal6: false,
                loading: true
            }
        },
        methods: {
            asyncOK () {
                setTimeout(() => {
                    this.modal6 = false;
                }, 2000);
            }
        }
    }
</script>

