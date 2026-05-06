<template>
  <div class="dashboard-page">
    <Navbar variant="blue" />

    <main class="dashboard-content">
      <section class="header">
        <h1>Calcular recomendação</h1>
        <p>Visualize o próximo passo para o desempenho ideal</p>
      </section>

      <section class="dashboard-grid">
        <div class="left-panel">
          <p>
            Informe os dados do seu último treino cardíaco e obtenha
            uma recomendação adequada de seu próximo exercício
          </p>

          <div class="metrics">
            <div class="metric-card">
              <span>Distância</span>
              <h2>X</h2>
            </div>

            <div class="metric-card">
              <span>BPM</span>
              <h2>X</h2>
            </div>

            <div class="metric-card">
              <span>Esforço</span>
              <h2>X</h2>
            </div>
          </div>

          <div class="recommendation">
            Texto de recomendação
          </div>

          <button>Verificar histórico de registros</button>
        </div>

        <div class="right-panel">
          <div class="input-group">
            <label>Distância</label>
            <input placeholder="Informe a distância" />
          </div>

          <div class="input-group">
            <label>BPM</label>
            <input placeholder="Informe o BPM" />
          </div>

          <div class="input-group">
            <label>Esforço</label>
            <input placeholder="Informe o esforço" />
          </div>

          <button>Enviar</button>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
</script>

<style scoped>
.dashboard-page {
  min-height: 100vh;
  background: #efefef;
  display: flex;
  flex-direction: column;
}

.dashboard-content {
  flex: 1;
  padding: 50px 45px;
}

.header h1 {
  font-size: 2rem;
  font-weight: 500;
  color: #111;
}

.header p {
  margin-top: 8px;
  font-size: 1rem;
  color: #6d6d6d;
}

.dashboard-grid {
  margin-top: 55px;
  display: flex;
  justify-content: space-between;
  gap: 35px;
}

.left-panel {
  flex: 2;
  background: #f5f5f5;
  border-radius: 10px;
  padding: 25px;
  border: 1px solid #d7d7d7;
}

.left-panel p {
  font-size: 1rem;
  line-height: 1.6;
  color: #111;
}

.metrics {
  margin-top: 30px;
  display: flex;
  gap: 15px;
}

.metric-card {
  flex: 1;
  height: 120px;
  background: white;
  border-radius: 8px;
  border: 1px solid #d7d7d7;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.metric-card span {
  font-size: 0.95rem;
  color: #111;
}

.metric-card h2 {
  text-align: center;
  font-size: 2rem;
  font-weight: 400;
}

.recommendation {
  margin-top: 18px;
  min-height: 110px;
  background: white;
  border-radius: 8px;
  border: 1px solid #d7d7d7;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #111;
  font-size: 1rem;
}

.left-panel button {
  width: 100%;
  margin-top: 18px;
  height: 48px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(to right, #19a8f8, #0b4fd0);
  color: white;
  font-size: 1rem;
  cursor: pointer;
}

.right-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-group label {
  font-size: 1rem;
  color: #111;
}

.input-group input {
  height: 48px;
  border-radius: 14px;
  border: 1px solid #b9b9b9;
  padding: 0 18px;
  background: transparent;
  outline: none;
  font-size: 0.95rem;
}

.input-group input::placeholder {
  color: #7b7b7b;
}

.right-panel button {
  margin-top: 10px;
  height: 48px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(to right, #19a8f8, #0b4fd0);
  color: white;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  opacity: 0.92;
}
</style>