<template>
    <div class="container" @click="routeBack">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 24" fill="none">
            <g filter="url(#filter0_d_123_1467)">
                <path
                    d="M13.9508 0.546645L8.44613 6.0513L5.06788 9.4124C4.38407 10.0972 4 11.0255 4 11.9932C4 12.961 4.38407 13.8892 5.06788 14.5741L13.9508 23.457C15.1169 24.6231 17.1061 23.7828 17.1061 22.1537V1.84993C17.1061 0.203676 15.1169 -0.619451 13.9508 0.546645Z"
                    fill="#FFFEF1" />
            </g>
            <defs>
                <filter id="filter0_d_123_1467" x="0" y="0" width="21.1062" height="32" filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_123_1467" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_123_1467" result="shape" />
                </filter>
            </defs>
        </svg>
        <h4>Back</h4>
    </div>
</template>
    
<script>
export default {
    data() {
        return {
        };
    },
    methods: {
        routeBack(){
            this.$router.go(-1);
        }
    }
}

</script>
    
<style scoped>
.container {
    display: flex;
    gap: 2rem;
}

.icon {
    background-color: transparent;
    border: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

h4 {
    color: var(--offwhite);
}</style>