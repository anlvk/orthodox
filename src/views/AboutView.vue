<template>
  <section class="about-page">
    <div class="about-grid">
      <div class="about-text-block">
        <span class="subtitle">• НАШИ ЦЕННОСТИ</span>
        <h2>Потомственные традиции и каноническое качество</h2>
        <p>Мастерская «Стандарт Киот» объединяет опытных резчиков по дереву, столяров-краснодеревщиков и мастеров церковного искусства. Каждое изделие создается вручную по строгим церковным канонам с благословения православного духовенства.</p>
        <p>Мы используем только сертифицированную отборную древесину, прошедшую многоэтапную камерную сушку, что исключает деформацию или растрескивание готовых изделий со временем.</p>
      </div>
      <div class="about-image-block">
        <img src="https://unsplash.com" alt="Работа в мастерской">
      </div>
    </div>

    <div class="features-grid">
      <div class="feature-card">
        <h3>Собственное производство</h3>
        <p>Контролируем весь цикл от распила бревна до финального покрытия лаком. Никаких посреднических наценок.</p>
      </div>
      <div class="feature-card">
        <h3>Натуральные материалы</h3>
        <p>Работаем исключительно с массивом твердых пород дерева: дубом, буком и ясенем, а также сусальным золотом.</p>
      </div>
      <div class="feature-card">
        <h3>Надежная доставка</h3>
        <p>Разработали индивидуальную жесткую обрешетку для транспортировки изделий. Гарантируем сохранность при доставке по РФ.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-page {
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 5%;
}
.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 50px;
  align-items: center;
  margin-bottom: 60px;
}
.subtitle {
  font-size: 0.8rem;
  letter-spacing: 2px;
  color: #888;
}
.about-text-block h2 {
  font-size: 2.2rem;
  margin: 15px 0 25px;
  font-weight: 400;
  color: var(--accent-green);
  line-height: 1.3;
}
.about-text-block p {
  color: #555;
  margin-bottom: 20px;
  font-size: 1rem;
  line-height: 1.7;
}
.about-image-block img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  border-top: 1px solid var(--accent-light);
  padding-top: 50px;
}
.feature-card h3 {
  font-size: 1.2rem;
  margin-bottom: 12px;
  font-weight: 500;
  color: var(--text-dark);
}
.feature-card p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr; gap: 30px; }
  .features-grid { grid-template-columns: 1fr; }
  .about-image-block img { height: 280px; }
}
</style>
