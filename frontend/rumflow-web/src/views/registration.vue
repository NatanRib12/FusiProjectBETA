<template>
  <div class="dashboard-page">
    <Navbar variant="blue" />

    <main class="dashboard-content">
      <section class="header">
          <div class="history-panel">
          <table>
            <thead>
              <tr>
                <th>Distância</th>
                <th>BPM</th>
                <th>Esforço</th>
                <th>Recomendação</th>
                <th>Data</th>
              </tr>
            </thead>

            <!-- Imprime os valores retornados na tabela -->
            <tbody>
              <!-- Para cada dado dentro de workouts gere uma linha da lista e chamada de workout. O ID serve para o Vue comparar o que mudou e o que continua na lista, permitindo que ele possa sempre mante-la atualizada -->
              <tr v-for="workout in workouts" :key="workout.id">
                <td>{{ workout.distance }} Km</td>
                <td>{{ workout.bpm }}</td>
                <td>{{ workout.charge }}</td>
                <td>{{ workout.recommendation }}</td>
                <td>{{ formatDate(workout.workoutdate) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'

const router = useRouter()

// Cria uma interface para impedir que o typescript nao leia a lista workout
interface Workout {
  id: number
  distance: number
  bpm: number
  charge: number
  recommendation: string
  workoutdate: string
}

// Declarando que a variável workouts deve seguir a estrutura do objeto Workout
const workouts = ref<Workout[]>([])

// Retorna o horário no fuso-horário do Brasil
function formatDate(date: string) {
  return new Date(date).toLocaleDateString('pt-BR')
}

// Faz uma requisição GET com o ID do usuário para obter todos os registros cadastrados no ID dele, para depois retornar
async function loadWorkouts() {
  const athleteId = localStorage.getItem('athleteId')

  if (!athleteId) {
    router.push('/')
    return
  }

  try {
    const response = await fetch(`http://localhost:8080/workouts/${athleteId}`)
    const data = await response.json()

    if (response.ok) {
      workouts.value = data
    }
  } catch (error) {
    console.log('Erro ao carregar histórico')
  }
}

onMounted(() => {
  loadWorkouts()
})
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

.dashboard-grid {
  margin-top: 55px;
  display: flex;
  justify-content: space-between;
  gap: 35px;
}

.history-panel {
  width: 100%;
  background: #f5f5f5;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #d7d7d7;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
}

thead {
  background: #ececec;
}

th {
  text-align: left;
  padding: 18px;
  font-size: 1rem;
  font-weight: 500;
  color: #111;
}

td {
  padding: 18px;
  border-top: 1px solid #e4e4e4;
  font-size: 0.95rem;
  color: #111;
}

tbody tr:hover {
  background: #f8f8f8;
}

</style>


