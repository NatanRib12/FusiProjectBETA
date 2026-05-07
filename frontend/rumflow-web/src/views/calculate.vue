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
              <h2>{{ workoutResult.distance || 'X' }}</h2>
            </div>

            <div class="metric-card">
              <span>BPM</span>
              <h2>{{ workoutResult.bpm || 'X' }}</h2>
            </div>

            <div class="metric-card">
              <span>Esforço</span>
              <h2>{{ workoutResult.charge || 'X' }}</h2>
            </div>
          </div>

          <div class="recommendation">
             <span>Recomendação</span> 
             {{ workoutResult.recommendation || 'Texto de recomendação' }}
          </div>

          <button @click="verHistorico">Verificar histórico de registros</button>
        </div>

        <form class="right-panel" @submit.prevent="calcular">
          <div class="input-group">
            <label>Distância</label>
            <input v-model="distance" placeholder="Informe a distância" />
          </div>

          <div class="input-group">
            <label>BPM</label>
            <input v-model="bpm" placeholder="Informe o BPM entre 0 a 200" />
          </div>

          <div class="input-group">
            <label>Esforço</label>
            <input v-model="charge" placeholder="Informe o esforço entre 1 a 10" />
          </div>

          <button>Enviar</button>
          <p v-if="errorMessage" class="error-message">
            {{ errorMessage }}
          </p>
        </form>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

const router = useRouter()
const distance = ref('')
const bpm = ref('')
const charge = ref('')
const errorMessage = ref('')

// objeto reativo que altera os valores na página assim que alterados no sistema
const workoutResult = ref({
  distance: '',
  bpm: '',
  charge: '',
  recommendation: ''
})

// Quando a página termina de ser criada, então o onMounted é ativado e executado. Caso não tenha nenhum valor no localStorrege, entende-se que não tem nenhum login feito
onMounted(() => {
  const athleteId = localStorage.getItem('athleteId')

  if (!athleteId) {
    router.push('/')
  }
})

// Redireciona para página registration
function verHistorico() {
  router.push('/registration')
}

// Envia uma requisição POST convertendo os valores do objeto JSON em números. Se estive ok, esses valores são armazenados no workoutResult e imprimidos na tela do usuário
async function calcular() {
  errorMessage.value = ''

 try {
    const response = await fetch('http://localhost:8080/workouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        athleteId: Number(localStorage.getItem('athleteId')),
        distance: Number(distance.value),
        bpm: Number(bpm.value),
        charge: Number(charge.value)
      })
    })

    const data = await response.json()

    if (response.ok) {
      workoutResult.value = data
    } else {
      errorMessage.value = data.message
    }
  } catch (error) {
    errorMessage.value = 'Erro ao conectar com o servidor'
  }
}


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
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  color: #111;
  font-size: 1rem;
}

.recommendation span{
    margin-right: 89%;
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