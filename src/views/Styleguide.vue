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

    <h1>Forms</h1>
    <div>
      <Checkbox classNames="checkbox--red" :checked="false"/>
      <Checkbox classNames="checkbox--red" :checked="true"/>
      <CustomInput placeholder="input focus" />
      <label class="b">LABEL</label>
      <CustomInput placeholder="input focus" />
      <SelectBox :options="[{id: 1, label: 'option 1'}, {id: 2, label: 'option 2'}]" />
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/CustomButton';
import CustomInput from '@/components/CustomInput';
import SelectBox from '@/components/SelectBox';
import Checkbox from '@/components/Checkbox';
export default {
  name: 'styleguide',
  components: {
  	CustomButton,
    CustomInput,
    SelectBox,
    Checkbox
  }
}
</script>
