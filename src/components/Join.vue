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

      commit_user() {
        let localOptions = 'https://demo.iyogera.com/backend/images/user_image/' + this.user.id + '.jpg'
        return localOptions;
      },

    jitsiOptions () {
      let url = this.lessonName.live_url;
      let name = this.user.first_name + ' ' + this.user.other_name;
      let email = this.user.email;
      return {
        roomName: url,
        noSSL: false,
        width: 600,
        height: 500,
        userInfo: {
          email: email,
          displayName: name,
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
      let user_pix = this.commit_user;
      this.$refs.jitsiRef.executeCommand('password', password );
      this.$refs.jitsiRef.executeCommand('avatarURL', user_pix );
    },
  },
};
</script>