<template>
  <div class="personal-settings">
    <div class="edit-personal-settings" @click="editMode = !editMode">
      <CustomButton v-if="editMode" classNames="btn--lg btn--green tu" text="Save" @click.native="updateCompany(company)"/>
      <CustomButton v-else classNames="btn--lg btn--green tu" text="Editer" />
    </div>
    <div class="container">
      <h3>Personal settings</h3>

      <div class="edit-user-infos" v-if="editMode">
        <input type="text" v-model="company.nom" class="input" placeholder="nom" /> 
        <input type="text" v-model="company.prenom" class="input" placeholder="prenom" />
        <input type="text" v-model="company.societe" class="input" placeholder="societe" />
        <input type="text" v-model="company.siret" class="input" placeholder="siret" />
        <input type="text" v-model="company.email" class="input" placeholder="email" />
        <input type="text" v-model="company.telephone" class="input" placeholder="telephone" />
      </div>

      <div class="user-infos" v-else>
        <div>
          <span>Nom</span>
          <span>{{company.nom}}</span>
        </div>
        <div>
          <span>Prénom</span>
          <span>{{company.prenom}}</span>
        </div>
        <div>
          <span>Société</span>
          <span>{{company.societe}}</span>
        </div>
        <div>
          <span>Siret</span>
          <span>{{company.siret}}</span>
        </div>
        <div>
          <span>Email</span>
          <span>{{company.email}}</span>
        </div>
        <div>
          <span>Téléphone</span>
          <span>{{company.telephone}}</span>
        </div>
      </div>

      <CustomButton v-if="darkTheme" @click.native="switchTheme()" classNames="btn--lg btn--green tu" text="Switch to light theme" />
      <CustomButton v-else @click.native="switchTheme()" classNames="btn--lg btn--green tu" text="Switch to dark theme" />
      <InputFile text="Changer mon avatar" v-on:uploadFile="uploadAvatarImage($event)" />
    </div>
  </div>
</template>

<script>
// Import modules
import { mapState, mapActions } from 'vuex';
// Import components
import CustomButton from '@/components/CustomButton.vue';
import InputFile from '@/components/InputFile.vue';

export default {
  name: 'personal-settings',
  components: {
    CustomButton,
    InputFile
  },

  data: () => {
    return {
      editMode: false
    };
  },

  computed: {
    ...mapState(['company', 'darkTheme'])
  },

  methods: {
    ...mapActions(['switchTheme', 'uploadAvatarImage', 'updateCompany'])
  }
};
</script>

<style>
</style>