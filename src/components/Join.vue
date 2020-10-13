<template>
  <vue-jitsi-meet
    ref="jitsiRef"
    domain="meet.jit.si"
    :options="jitsiOptions"
  ></vue-jitsi-meet>
</template>
 
<script>
import { JitsiMeet } from '@mycure/vue-jitsi-meet';
export default {
  props: [
    "lessonName",
    "user"
  ],
  components: {
    VueJitsiMeet: JitsiMeet
  },
  computed: {
    jitsiOptions () {
      let url = this.lessonName.live_url;
      return {
        roomName: url,
        noSSL: false,
        width: 600,
        height: 500,
        userInfo: {
          email: 'user@email.com',
          displayName: 'Love',
        },
        configOverwrite: {
          enableNoisyMicDetection: true
        },
        interfaceConfigOverwrite: {
          SHOW_JITSI_WATERMARK: false,
          SHOW_WATERMARK_FOR_GUESTS: false,
          SHOW_CHROME_EXTENSION_BANNER: false
        },
        onload: this.onIFrameLoad
      };
    },
  },
  methods: {

    onIFrameLoad () {
      //
      let password = this.lessonName.password;
      this.$refs.jitsiRef.executeCommand('password', password );
    },
  },
};
</script>