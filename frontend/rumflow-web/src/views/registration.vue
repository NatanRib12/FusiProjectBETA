<template>
  <div class="dashboard-page">
    <Navbar variant="blue" />

    <main class="dashboard-content">
      <section class="header">
        <h1>Histórico de registro</h1>
        <p>Visualise seus desempenhos anteriores</p>
      </section>

      <section class="dashboard-grid">
        <div class="registratioin-painel">

          <div class="painel">
            <div class="painel-card">
              <span>Distância</span>
              <h2>X</h2>
            </div>
          </div>

          <button>Verificar histórico de registros</button>
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

.registratioin-painel {
  flex: 2;
  background: #f5f5f5;
  border-radius: 10px;
  padding: 25px;
  border: 1px solid #d7d7d7;
}

.registratioin-painel p {
  font-size: 1rem;
  line-height: 1.6;
  color: #111;
}

.painel {
  margin-top: 30px;
  display: flex;
  gap: 15px;
}

.painel-card {
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

.painel-card span {
  font-size: 0.95rem;
  color: #111;
}


.registratioin-painel button {
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


button:hover {
  opacity: 0.92;
}
</style>