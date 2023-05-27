<template>
  <div :class="[cls.formView]">
    <div class="container">
      <div :class="[cls.formView__wrapper]">
        <form :class="['form', cls.formView__form]">
          <div :class="[cls.form__section]">
            <div :class="[cls.section__title]">Персональные данные</div>
            <div :class="[cls.form__field]">
              <label for="name">Имя</label>
              <input type="text" name="" id="name" v-model="name">
            </div>
            <div :class="[cls.form__field]">
              <label for="name">Возраст</label>
              <input type="text" name="" id="age" v-model="age" @input="restrictToNumbers($event)">
            </div>
          </div>
          <div :class="[cls.form__section, cls.section__child]">
            <div class="section__title">Дети (макс. 5)</div>
            <button :class="[cls.form__addChild]" :disabled="children.length >= 5" @click.prevent="addChild">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.13332 10.8556C4.50125 10.8555 3.98887 11.3679 3.98887 12C3.98887 12.6321 4.50126 13.1445 5.13332 13.1445L10.8554 13.1445L10.8554 18.8668C10.8554 19.4989 11.3678 20.0113 11.9999 20.0113C12.632 20.0113 13.1444 19.4989 13.1444 18.8668L13.1443 13.1445L18.8667 13.1445C19.4988 13.1445 20.0112 12.6321 20.0112 12C20.0112 11.3679 19.4988 10.8556 18.8667 10.8556L13.1443 10.8556L13.1443 5.13338C13.1443 4.50132 12.632 3.98893 11.9999 3.98893C11.3678 3.98893 10.8554 4.50131 10.8554 5.13338L10.8554 10.8556L5.13332 10.8556Z" fill="#01A7FD"/>
              </svg>
              Добавить ребенка
            </button>
            <div v-for="(child, index) in children" :key="index" :class="[cls.child]">
              <div :class="[cls.form__field]">
                <label for="childName">Имя</label>
                <input type="text" name="" id="childName" v-model="child.name">
              </div>
              <div :class="[cls.form__field]">
                <label for="childAge">Возраст</label>
                <input type="text" name="" id="childAge" v-model="child.age" @input="restrictToNumbers($event)">
              </div>
              <button @click.prevent="removeChild(index)" :class="[cls.deleteChild]">Удалить</button>
            </div>

          </div>
          <button :class="[cls.btnSave]" @click.prevent="savePeople()">Сохранить</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import cls from './FormView.module.scss';
import { Ref, ref } from "vue";
import { IChild, IPeople } from "@/app/types/people";
import { useStore } from "vuex";

const store = useStore();

const name: Ref = ref("");
const age: Ref = ref("");
const children = ref<IChild[]>([]);

const addChild = () => {
  if (children.value.length < 5) {
    children.value.push({
      name: '',
      age: ''
    });
  }
}

const removeChild = (index) => {
  children.value.splice(index, 1);
};

const restrictToNumbers = (event) => {
  const input = event.target;
  input.value = input.value.replace(/\D/g, '');
};

const savePeople = () => {

  const formData: IPeople = {
    name: name.value,
    age: age.value,
    children: children.value
  }

  store.commit("people/savePeople", formData);

}

</script>