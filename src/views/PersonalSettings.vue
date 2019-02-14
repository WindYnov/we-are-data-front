<template>
  <div class="personal-settings">
    <div class="container">
      <h3>Personal settings</h3>

      <div class="edit-user-infos" v-if="editMode">
        <input type="text" v-model="user.nom" class="input" placeholder="nom" /> 
        <input type="text" v-model="user.prenom" class="input" placeholder="prenom" />
        <input type="text" v-model="user.societe" class="input" placeholder="societe" />
        <input type="text" v-model="user.siret" class="input" placeholder="siret" />
        <input type="text" v-model="user.email" class="input" placeholder="email" />
        <input type="text" v-model="user.telephone" class="input" placeholder="telephone" />
        <CustomButton classNames="btn--lg btn--green tu" text="Save changes" />
      </div>

      <div class="user-infos" v-else>
        <div>
          <span>Nom</span>
          <span>Test</span>
        </div>
        <div>
          <span>Prénom</span>
          <span>Test</span>
        </div>
        <div>
          <span>Société</span>
          <span>Test</span>
        </div>
        <div>
          <span>Siret</span>
          <span>Test</span>
        </div>
        <div>
          <span>Email</span>
          <span>Test</span>
        </div>
        <div>
          <span>Téléphone</span>
          <span>Test</span>
        </div>
      </div>

      <CustomButton v-if="darkTheme" @click.native="switchTheme()" classNames="btn--lg btn--green tu" text="Switch to light theme" />
      <CustomButton v-else @click.native="switchTheme()" classNames="btn--lg btn--green tu" text="Switch to dark theme" />
      <input type="file" name="file" @change="uploadAvatarImage($event)">
    </div>
  </div>
</template>

<script>  
// Import modules
import { mapState, mapActions } from 'vuex';
// Import components
import CustomButton from '@/components/CustomButton.vue';

export default {
  name: 'personal-settings',
  components: {
    CustomButton
  },

  data: () => {
    return {
      user: {},
      editMode: false
    };
  },

  computed: {
    ...mapState(['darkTheme'])
  },

  methods: {
    ...mapActions(['switchTheme', 'uploadAvatarImage'])
  }
};
</script>

<style>
</style>