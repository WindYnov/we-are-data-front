<template>
  <div class="styleguide">
    <h1>Buttons</h1>
    <div>
    	<CustomButton classNames="btn--lg btn--black-trans" :rounded="false" text="BOUTON LARGE" />
      <CustomButton classNames="btn--lg btn--black-trans" :rounded="true" text="BOUTON LARGE" />
    	<CustomButton classNames="btn--lg btn--green" :rounded="true" text="BOUTON LARGE" />
    	<CustomButton classNames="btn--lg btn--green-trans" :rounded="true" text="BOUTON LARGE" />
    	<CustomButton classNames="btn--lg btn--green-sea-trans" :rounded="false" text="BOUTON LARGE" />
    	<CustomButton classNames="btn--lg btn--red" :rounded="false" text="BOUTON LARGE" />
    	<CustomButton classNames="btn--lg btn--light-gray" :rounded="false" text="BOUTON LARGE" />
    	<CustomButton classNames="btn--lg btn--light-gray" :rounded="true" text="BOUTON LARGE" />
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/CustomButton';
export default {
  name: 'styleguide',
  components: {
  	CustomButton
  }
}
</script>
