<template>
  <div class="home-page">
    <Navbar />

    <section class="hero">
      <div class="hero-content">
        <h1>
          CALCULE,<br />
          ANALISE E AVANÇE.
        </h1>

        <p>
          A RunFlow nasceu com o compromisso de impulsionar a evolução
          contínua de atletas amadores que buscam alta performance na corrida.
          Por meio de análises precisas baseadas no seu desempenho, a plataforma
          oferece recomendações inteligentes para que cada treino contribua
          de forma estratégica para o seu progresso.
        </p>
      </div>
    </section>

    <section class="feature">
        <img :src="womanRunning" />

        <div class="text-box">
            <h2>ELEVE SEU NÍVEL UTILIZANDO RECOMENDAÇÕES INTELIGENTES</h2>
            <p>
            Por meio de análises inteligentes, você receberá recomendações
            personalizadas para seus próximos treinos.
            </p>
        </div>
    </section>

    <section class="feature reverse">
      <div class="text-box">
        <h2>SUPORTE ADAPTATIVO PARA CADA PÚBLICO</h2>
        <p>
          Oferecemos uma abordagem personalizada, adaptada ao desempenho
          e às necessidades de cada corredor.
        </p>
      </div>

      <img :src="manRunning">
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import manRunning from '../assets/style/imgs/manrunning.jpg'
import womanRunning from '../assets/style/imgs/womanrunning.jpg'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const router = useRouter()

onMounted(() => {
  const athleteId = localStorage.getItem('athleteId')

  if (!athleteId) {
    router.push('/')
  }
})

</script>

<style scoped>
.home-page {
  background: #efefef;
  min-height: 100vh;
}

.hero {
  height: 40vw;
  background: linear-gradient(to right, #19a8f8, #0b4fd0);
  display: flex;
  align-items: center;
  padding: 0 70px;
}

.hero-content {
  max-width: 620px;
  color: white;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 25px;
}

.hero p {
  font-size: 1.2rem;
  line-height: 1.7;
}

.feature {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 90px 70px;
  gap: 60px;
}

.feature .reverse {
  flex-direction: row-reverse;
}

.text-box {
  max-width: 500px;
}

img {
    height: 300px;
}

.text-box h2 {
  font-size: 2.1rem;
  margin-bottom: 25px;
}

.text-box p {
  font-size: 1.15rem;
  line-height: 1.7;
  display: flex;
}
</style>