<script setup>
import { ref } from 'vue'

// Реактивные переменные для полей формы
const name = ref('')
const phone = ref('')
const message = ref('')
const isSubmitted = ref(false)
const honeypot = ref('') // Поле должно оставаться пустым


// Функция отправки формы (имитация)
const submitForm = () => {
    // Если бот заполнил скрытое поле — тихо прерываем выполнение
  if (honeypot.value !== '') {
    console.warn('Робот обнаружен!')
    return 
  }

  if (!name.value || !phone.value) {
    alert('Пожалуйста, заполните обязательные поля (Имя и Телефон)')
    return
  }
  
  // Здесь в будущем будет реальный запрос на сервер (axios/fetch)
  console.log('Данные формы:', {
    name: name.value,
    phone: phone.value,
    message: message.value
  })

  // Показываем сообщение об успешной отправке
  isSubmitted.value = true

  // Очищаем поля
  name.value = ''
  phone.value = ''
  message.value = ''
}
</script>

<template>
  <section class="contact-page">
    <div class="contact-grid">
      
      <!-- Левая колонка: Информация -->
      <div class="contact-info">
        <span class="subtitle">• НАШИ КОНТАКТЫ</span>
        <h2>Свяжитесь с мастером</h2>
        <p class="description">Вы можете обсудить размеры киота, породу дерева, канонические особенности иконостаса или сделать индивидуальный расчет стоимости.</p>
        
        <div class="info-items">
          <div class="info-item">
            <h4>📍 Адрес производства:</h4>
            <p>Россия, Удмуртская Республика, г. Ижевск</p>
          </div>
          <div class="info-item">
            <h4>📞 Телефон / Мессенджеры:</h4>
            <p><a href="tel:+79128703146" class="link">+7 (912) 870-31-46</a></p>
          </div>
          <div class="info-item">
            <h4>✉️ Электронная почта:</h4>
            <p><a href="mailto:naleks-art@yandex.ru" class="link">naleks-art@yandex.ru</a></p>
          </div>
        </div>
      </div>

      <!-- Правая колонка: Форма -->
      <div class="contact-form-container">
        <transition name="fade" mode="out-in">
          <div v-if="isSubmitted" class="success-message" key="success">
            <h3>Спасибо за обращение!</h3>
            <p>Мастер свяжется с вами по указанному телефону в ближайшее время для уточнения деталей.</p>
            <button @click="isSubmitted = false" class="btn-submit">Отправить еще раз</button>
          </div>

          <form v-else @submit.prevent="submitForm" class="contact-form" key="form">
            <h3>Заявка на расчет стоимости</h3>

            <div class="hidden-honey">
                <label for="nickname">Если вы человек, оставьте это поле пустым</label>
                <input type="text" id="nickname" v-model="honeypot" autocomplete="off">
            </div>

            
            <div class="form-group">
              <label for="name">Ваше имя *</label>
              <input type="text" id="name" v-model.trim="name" placeholder="Как к вам обращаться" required>
            </div>

            <div class="form-group">
              <label for="phone">Номер телефона *</label>
              <input type="tel" id="phone" v-model.trim="phone" placeholder="+7 (___) ___-__-__" required>
            </div>

            <div class="form-group">
              <label for="message">Какое изделие вас интересует?</label>
              <textarea id="message" v-model.trim="message" rows="4" placeholder="Укажите размеры, породу дерева или ваши пожелания..."></textarea>
            </div>

            <button type="submit" class="btn-submit">Оставить заявку</button>
          </form>
        </transition>
      </div>

    </div>
  </section>
</template>

<style scoped>
.contact-page {
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 5%;
}
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: start;
}
.subtitle {
  font-size: 0.8rem;
  letter-spacing: 2px;
  color: #888;
}
.contact-info h2 {
  font-size: 2.2rem;
  margin: 15px 0 25px;
  font-weight: 400;
  color: var(--accent-green);
}
.description {
  color: #555;
  margin-bottom: 35px;
  line-height: 1.7;
}
.info-items {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.info-item h4 {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 5px;
}
.info-item p, .link {
  color: #666;
  text-decoration: none;
  transition: color 0.3s;
}
.link:hover {
  color: var(--accent-green);
}

/* Стили формы */
.contact-form-container {
  background-color: var(--white);
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.04);
}
.contact-form h3, .success-message h3 {
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 25px;
  color: var(--accent-green);
}
.form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
}
.form-group label {
  font-size: 0.9rem;
  color: #555;
}
.form-group input, .form-group textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid var(--accent-light);
  background-color: var(--bg-color);
  border-radius: 4px;
  font-size: 1rem;
  color: var(--text-dark);
  outline: none;
  transition: border-color 0.3s;
}
.form-group input:focus, .form-group textarea:focus {
  border-color: var(--accent-green);
}
.btn-submit {
  width: 100%;
  background-color: var(--accent-green);
  color: var(--white);
  padding: 14px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s;
}
.btn-submit:hover {
  background-color: #2b3a2a;
}
.success-message {
  text-align: center;
  padding: 20px 0;
}
.success-message p {
  color: #555;
  margin-bottom: 30px;
  line-height: 1.6;
}

/* Анимация формы */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .contact-grid { grid-template-columns: 1fr; gap: 40px; }
  .contact-form-container { padding: 25px; }
}

.hidden-honey {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  z-index: -1;
  overflow: hidden;
}


</style>
