<template>
  <div class="footer-mobile">
      <div class="container footer-mobile__hero">
          <div class="footer-mobile__item">
            <svg class="footer-mobile__icon" width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.3636 22.9845V16.8917C14.3636 16.6224 14.2631 16.3641 14.0841 16.1737C13.905 15.9833 13.6623 15.8763 13.4091 15.8763H9.59091C9.33775 15.8763 9.09496 15.9833 8.91594 16.1737C8.73693 16.3641 8.63636 16.6224 8.63636 16.8917V22.9845C8.63636 23.2539 8.5358 23.5121 8.35678 23.7026C8.17777 23.893 7.93498 24 7.68182 24H1.95455C1.70138 24 1.45859 23.893 1.27958 23.7026C1.10057 23.5121 1 23.2539 1 22.9845V11.2432C1.00214 11.1027 1.03069 10.964 1.08396 10.8354C1.13724 10.7068 1.21417 10.5908 1.31023 10.4943L10.8557 1.26624C11.0316 1.09498 11.2615 1 11.5 1C11.7385 1 11.9684 1.09498 12.1443 1.26624L21.6898 10.4943C21.7858 10.5908 21.8628 10.7068 21.916 10.8354C21.9693 10.964 21.9979 11.1027 22 11.2432V22.9845C22 23.2539 21.8994 23.5121 21.7204 23.7026C21.5414 23.893 21.2986 24 21.0455 24H15.3182C15.065 24 14.8222 23.893 14.6432 23.7026C14.4642 23.5121 14.3636 23.2539 14.3636 22.9845Z" stroke="#6A6A6A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p class="text footer-mobile__text">Главная</p>
          </div>
          <div class="footer-mobile__item">
            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.1875 24.75L26.8125 24.75C27.9516 24.75 28.875 23.8266 28.875 22.6875L28.875 8.25C28.875 7.11091 27.9516 6.1875 26.8125 6.1875L6.1875 6.1875C5.04841 6.1875 4.125 7.11091 4.125 8.25L4.125 22.6875C4.125 23.8266 5.04841 24.75 6.1875 24.75Z" stroke="#6A6A6A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.625 28.875H12.375" stroke="#6A6A6A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.625 15.4688L14.4375 11.3438V19.5938L20.625 15.4688Z" stroke="#6A6A6A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p class="text footer-mobile__text">Каталог</p>
          </div>
          <div class="footer-mobile__item">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 26.25C21.2132 26.25 26.25 21.2132 26.25 15C26.25 8.7868 21.2132 3.75 15 3.75C8.7868 3.75 3.75 8.7868 3.75 15C3.75 21.2132 8.7868 26.25 15 26.25Z" stroke="#6A6A6A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 18.75C17.5888 18.75 19.6875 16.6513 19.6875 14.0625C19.6875 11.4737 17.5888 9.375 15 9.375C12.4112 9.375 10.3125 11.4737 10.3125 14.0625C10.3125 16.6513 12.4112 18.75 15 18.75Z" stroke="#6A6A6A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.47656 23.3672C8.18193 21.9779 9.25823 20.811 10.5862 19.9959C11.9141 19.1808 13.4418 18.7493 15 18.7493C16.5582 18.7493 18.0859 19.1808 19.4138 19.9959C20.7418 20.811 21.8181 21.9779 22.5234 23.3672" stroke="#6A6A6A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p class="text footer-mobile__text">Профиль</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer-mobile{
    width: 100%;
    background: #171717;
    padding-top: 13px;
    padding-bottom: 9px;
    margin-top: 12px;
    display: none;
}
.footer-mobile__hero{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.footer-mobile__item{
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
}
.footer-mobile__icon{
    margin-bottom: 5px;
}
.footer-mobile__text{
    font-size: 9px;
    line-height: 12px;
    color: #6A6A6A;
    transition: color var(--transition-time) ease-in-out;
}
.footer-mobile__item:hover .footer-mobile__icon path{
    transition: all var(--transition-time) ease-in-out;
}
.footer-mobile__item:hover path{
    stroke: #fff;
}
.footer-mobile__item:hover .footer-mobile__text{
    color: #fff;
}

@media screen and (max-width: 768px) {
    .footer-mobile{
        display: block;
    }
}
</style>