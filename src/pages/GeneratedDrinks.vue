<template>
  <div class="container" >
    <TheHeader id="margin-bottom" :title="'Cocktail Party'"></TheHeader>
    <TransitionGroup tag="div" name="list">
      <div v-if="isLoading" :key="'loaders'" class="loaders">
        <h2>Shaking up a random Drink...</h2>
        <div class="loading-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="250" viewBox="0 0 222 213" fill="none">
            <g clip-path="url(#clip0_237_566)">
              <path
                d="M109.24 185.025C158.465 185.025 198.37 145.12 198.37 95.895C198.37 46.6699 158.465 6.76501 109.24 6.76501C60.0147 6.76501 20.1099 46.6699 20.1099 95.895C20.1099 145.12 60.0147 185.025 109.24 185.025Z"
                fill="#367868" />
              <path
                d="M109.24 165.115C147.469 165.115 178.46 134.124 178.46 95.895C178.46 57.6659 147.469 26.675 109.24 26.675C71.0106 26.675 40.0198 57.6659 40.0198 95.895C40.0198 134.124 71.0106 165.115 109.24 165.115Z"
                fill="#4CBD9D" />
              <path
                d="M109.24 135.015C130.845 135.015 148.36 117.5 148.36 95.895C148.36 74.2896 130.845 56.775 109.24 56.775C87.6345 56.775 70.1199 74.2896 70.1199 95.895C70.1199 117.5 87.6345 135.015 109.24 135.015Z"
                fill="#9DDFC6" />
              <path
                d="M111.81 198.985C111.1 198.985 110.39 198.895 109.69 198.705L56.07 184.245C51.75 183.075 49.19 178.615 50.35 174.305L80.66 61.945C81 60.695 81.64 59.525 82.52 58.575L108.69 30.035C108.92 29.785 109.08 29.485 109.17 29.155L114.4 9.76501C115.35 6.23501 118.57 3.76501 122.23 3.76501C122.94 3.76501 123.65 3.85501 124.35 4.04501L140.01 8.26501C142.1 8.82501 143.85 10.175 144.93 12.055C146.01 13.935 146.29 16.115 145.73 18.215L140.52 37.525C140.43 37.875 140.42 38.235 140.51 38.585L149.98 76.625C150.31 77.955 150.3 79.365 149.94 80.695L119.66 192.975C118.71 196.505 115.49 198.975 111.83 198.975L111.81 198.985Z"
                fill="#C1F2F9" />
              <path
                d="M122.22 6.76501C122.66 6.76501 123.11 6.82501 123.55 6.94501L139.21 11.165C141.94 11.905 143.55 14.705 142.81 17.435L137.6 36.745C137.37 37.585 137.37 38.465 137.57 39.315L147.04 77.355C147.25 78.195 147.24 79.085 147.01 79.925L116.73 192.205C116.12 194.485 114.05 195.985 111.8 195.985C111.36 195.985 110.91 195.925 110.47 195.805L56.8499 181.345C54.1199 180.605 52.5099 177.805 53.2499 175.075L83.5599 62.715C83.7699 61.925 84.1699 61.195 84.7299 60.595L110.9 32.055C111.45 31.455 111.85 30.725 112.07 29.935L117.3 10.545C117.91 8.26501 119.98 6.76501 122.23 6.76501M122.23 0.765015C117.22 0.765015 112.81 4.14501 111.5 8.98501L106.33 28.165L80.3099 56.545C79.1099 57.855 78.2299 59.445 77.7699 61.165L47.4599 173.525C46.6899 176.395 47.0799 179.385 48.5599 181.955C50.0399 184.525 52.4299 186.375 55.2999 187.145L108.92 201.605C109.87 201.865 110.84 201.985 111.82 201.985C116.83 201.985 121.24 198.605 122.55 193.765L152.83 81.485C153.32 79.665 153.34 77.735 152.88 75.905L143.47 38.085L148.62 18.995C149.39 16.125 149 13.135 147.52 10.565C146.04 7.99502 143.65 6.14501 140.78 5.37501L125.12 1.14501C124.17 0.885015 123.2 0.765015 122.22 0.765015L122.23 0.765015Z"
                fill="white" />
              <path d="M79.5099 28.105C68.6299 32.955 54.5399 46.405 47.0999 62.155" stroke="white" stroke-width="6"
                stroke-miterlimit="10" stroke-linecap="round" />
              <path d="M49.1399 12.945C24.6399 27.315 12.4999 63.055 12.1799 80.475" stroke="white" stroke-width="6"
                stroke-miterlimit="10" stroke-linecap="round" />
              <path
                d="M170.92 139.395C170.4 143.185 169.09 149.145 165.44 155.525C160.72 163.755 154.5 168.495 151.03 170.755"
                stroke="white" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" />
              <path
                d="M203.1 113.855C203.22 122.025 202.4 134.775 197.15 149.235C192.62 161.735 186.41 171.005 181.67 177.005"
                stroke="white" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" />
              <mask id="mask0_237_566" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="53" y="6" width="95"
                height="190">
                <path
                  d="M137.61 36.745L142.82 17.435C143.56 14.705 141.94 11.905 139.22 11.165L123.56 6.94502C120.83 6.20502 118.03 7.82502 117.29 10.545L112.06 29.935C111.85 30.725 111.45 31.455 110.89 32.055L84.72 60.595C84.17 61.195 83.77 61.925 83.55 62.715L53.24 175.075C52.5 177.805 54.12 180.605 56.84 181.345L110.46 195.805C113.19 196.545 115.99 194.925 116.73 192.205L147.01 79.925C147.24 79.085 147.24 78.205 147.04 77.355L137.57 39.315C137.36 38.475 137.37 37.585 137.6 36.745H137.61Z"
                  fill="white" />
              </mask>
              <g mask="url(#mask0_237_566)">
                <path
                  d="M75.6201 137.465C85.5501 143.005 100.21 142.055 109.24 135.015C118.11 128.105 115.11 120.355 123.62 113.245C132.69 105.655 149.07 103.595 157.09 109.725C174.95 123.375 167.84 190.395 129.35 207.925C105.83 218.635 80.0701 206.555 70.7801 202.205C59.6801 196.995 34.4301 185.155 31.5901 162.135C28.8601 140.015 47.9701 116.845 58.4501 118.535C65.4301 119.665 64.1901 131.095 75.6201 137.475V137.465Z"
                  fill="#FBD751" />
              </g>
              <g filter="url(#filter0_d_237_566)">
                <path
                  d="M25.8499 141.505L18.0699 142.885C17.5399 142.975 17.0299 142.625 16.9299 142.085C16.6399 140.435 16.5899 139.065 16.7799 137.975C16.9699 136.885 17.3599 135.845 17.9499 134.865C18.5399 133.885 19.9299 132.095 22.1299 129.505C23.3099 128.145 23.8099 126.995 23.6499 126.055C23.4899 125.115 23.0799 124.445 22.4399 124.025C21.7999 123.605 20.9099 123.495 19.7899 123.695C18.5799 123.905 17.6599 124.485 17.0099 125.425C16.4699 126.205 16.1999 127.375 16.1999 128.925C16.1999 129.455 15.7999 129.895 15.2699 129.925L7.11992 130.355C6.56992 130.385 6.09992 129.955 6.07992 129.395C5.98992 126.135 6.80992 123.315 8.53992 120.925C10.4499 118.305 13.7799 116.565 18.5299 115.725C22.2299 115.065 25.3499 115.315 27.8999 116.455C31.3599 117.995 33.3999 120.505 34.0199 123.985C34.2799 125.425 34.1199 126.895 33.5599 128.375C32.9999 129.855 31.6599 131.785 29.5399 134.155C28.0699 135.815 27.1799 137.095 26.8699 138.005C26.6399 138.695 26.5599 139.505 26.6499 140.435C26.6999 140.945 26.3499 141.415 25.8499 141.505ZM18.1899 145.515L26.6199 144.025C27.1499 143.935 27.6599 144.285 27.7599 144.825L29.0399 152.025C29.1299 152.555 28.7799 153.065 28.2399 153.165L19.8099 154.655C19.2799 154.745 18.7699 154.395 18.6699 153.855L17.3899 146.655C17.2999 146.125 17.6499 145.615 18.1899 145.515Z"
                  fill="#FFFEFF" />
              </g>
              <g filter="url(#filter1_d_237_566)">
                <path
                  d="M190.36 78.365L184.2 72.465C183.78 72.055 183.76 71.385 184.17 70.965C185.42 69.665 186.58 68.745 187.66 68.215C188.74 67.685 189.89 67.365 191.12 67.255C192.35 67.145 194.8 67.215 198.46 67.485C200.4 67.645 201.72 67.355 202.43 66.615C203.14 65.875 203.47 65.095 203.43 64.265C203.39 63.435 202.92 62.595 202.03 61.745C201.08 60.835 199.98 60.385 198.75 60.425C197.72 60.455 196.53 60.965 195.19 61.945C194.73 62.285 194.09 62.215 193.73 61.775L188.16 54.945C187.78 54.485 187.86 53.795 188.33 53.435C191.12 51.275 194.1 50.195 197.28 50.185C200.78 50.185 204.41 51.975 208.18 55.585C211.11 58.395 212.89 61.275 213.52 64.225C214.38 68.225 213.49 71.595 210.85 74.355C209.76 75.495 208.38 76.295 206.73 76.755C205.08 77.215 202.55 77.275 199.13 76.935C196.74 76.705 195.06 76.755 194.08 77.065C193.33 77.305 192.58 77.755 191.82 78.415C191.4 78.785 190.77 78.785 190.37 78.395L190.36 78.365ZM181.98 74.245L188.65 80.635C189.07 81.045 189.09 81.715 188.68 82.135L183.21 87.845C182.8 88.265 182.13 88.285 181.71 87.875L175.04 81.485C174.62 81.075 174.6 80.405 175.01 79.985L180.48 74.275C180.89 73.855 181.56 73.835 181.98 74.245Z"
                  fill="#FFFEFF" />
              </g>
            </g>
            <defs>
              <filter id="filter0_d_237_566" x="3.07324" y="113.365" width="36.0679" height="47.3041"
                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha" />
                <feOffset dx="1" dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_237_566" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_237_566" result="shape" />
              </filter>
              <filter id="filter1_d_237_566" x="171.713" y="48.185" width="47.1235" height="45.9865"
                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha" />
                <feOffset dx="1" dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_237_566" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_237_566" result="shape" />
              </filter>
              <clipPath id="clip0_237_566">
                <rect width="221" height="211.47" fill="white" transform="translate(0.5 0.765015)" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <FriendElement :friend="friends[count]" :id="count" :centered="true"></FriendElement>
      </div>
      <div  v-if="!isLoading" :key="count" class="showcase" @click="nextDrink">
        <ShowcaseDrink  
        :id="count" :friend-name="friends[count]"
          :drink-name="drinks[count]">
        </ShowcaseDrink>
        <!-- <BaseButton v-if="!isLoading" @click="nextDrink" :text="'Next drink!'"></BaseButton> -->
      </div>
    </TransitionGroup>
    <BackgroundSwirl></BackgroundSwirl>
  </div>

</template>

<script setup>
import "../assets/main.css";
import FriendsContainer from "../components/FriendsContainer.vue";
import TheHeader from '../components/TheHeader.vue';
import BaseButton from "../components/BaseButton.vue";
import FriendElement from "../components/FriendElement.vue";
import ShowcaseDrink from "../components/ShowcaseDrink.vue";
import BackgroundSwirl from "../components/BackgroundSwirl.vue";

</script>

<script>

export default {
  data() {
    return {
      typeElement: 'notRemoveable',
      count: 0,
      id: 0,
      isLoading: true,
    };
  },
  async beforeCreate() {
    const times = this.$store.getters.friends;
    console.log(times);
    for (let i = 0; i < times.length; i++) {
      await this.$store.dispatch('generateDrink');
    };
    console.log('DONE');
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
  computed: {
    friends() {
      return this.$store.getters.friends;
    },
    drinks() {
      return this.$store.getters.drinks;
    },
  },
  methods: {
    nextDrink() {
      this.count++;
      if(this.count === this.friends.length){
        this.$router.push('overview');
      };
      this.loading();
    },
    loading() {
        this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
  }

};

</script>


<style scoped>
.list-enter-active {
  opacity: 1;
  transition: all 1s ease;
  transform: translateX(0) scale(1);
}

.list-move div {
  transition: all 1s ease;
}


.list-leave-active .showcase {
  transition: all 1s ease;
}


.list-enter-from .showcase {
  transform: translateX(-50rem);
  opacity: 0;
}
.list-enter-from {
  transform: scale(0);
  opacity: 0;
}

.list-leave-to .showcase{
  transform: translateX(50rem);
  opacity: 0;
}

.list-enter-to .showcase{
  transform: translateX(0);
  opacity: 1;
}

.list-leave-from{
  transform: translateX(0);
  opacity: 1;
}

#margin-bottom {
  margin-bottom: 2rem;
}

h2 {
  text-align: center;
    text-transform: capitalize;
    margin-bottom: 3rem;
    font-weight: 400;
    font-size: 2rem;
}

.loaders{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50rem;
}
.loading-icon {
  width: fit-content;
  margin: auto;
  animation: shake 1.4s infinite;
}

@keyframes shake {
  0% {
    transform: rotate(0);
  }
  20% {
    transform: rotate(0);
  }

  25% {
    transform: rotate(-5deg);
  }

  30% {
    transform: rotate(5deg);
  }

  45% {
    transform: rotate(-5deg);
  }

  100% {
    transform: rotate(0);
  }
}</style>