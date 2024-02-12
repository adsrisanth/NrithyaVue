<template>
  <section
    class="relative z-20 overflow-hidden bg-[rgb(0,0,0)] pt-20 pb-12 lg:pt-[80px] lg:pb-[90px]"
  >
    <div class="container mx-auto">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4">
          <div class="mx-auto mb-[40px] max-w-[520px] text-center lg:mb-16">
            <h2
              class="mb-4 text-3xl font-bold text-dark font-montserrat sm:text-[40px] sm:leading-[48px]"
            >
              FAQ's
            </h2>
          </div>
        </div>
      </div>
      <div class="w-full flex  justify-center">
      <div class="-mx-4 md:w-[80%] w-full flex justify-center">
        <div class="w-full px-4 flex flex-col font-montserrat  xxl:text[37px] text-[23px] max-sm:text-[23px] max-ssm:text-[21px] max-vsm:text-[21px] justify-center">
          <div v-for="faq in faqs" :key="faq.id" class="border-b-[1px] border-gray-500 py-2">
            <div
              class="w-full rounded-lg"
            >
              <button class="faq-btn flex relative w-full text-left" @click="handleToggle(faq.id)">
                <div
                  class="flex h-10 w-full relative -mt-[1.8px] max-w-[40px] items-center justify-center rounded-lg"
                >
                  <svg
                    class="fill-primary stroke-primary duration-200 ease-in-out"
                    :class="activeFaq == faq.id ? 'rotate-0':'-rotate-90'"
                    width="13"
                    height="10"
                    viewBox="0 0 17 10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                      class="fill-gray-400 hover:fill-gray-300"
                      stroke=""
                    />
                  </svg>
                </div>

                <div class="w-full">
                  <h4 :class="activeFaq == faq.id?'text-gray-300':'text-gray-400'" class="mt-1 transition-all font-poppins  text-lg font-base text-gray-400 hover:text-gray-300">
                    {{ faq.header }}
                  </h4>
                </div>
              </button>

              <transition v-if="activeFaq === faq.id" name="fade" mode="out-in">
                <div v-if="activeFaq === faq.id" :class="[activeFaq === faq.id ? 'block' : 'hidden', 'transition-all duration-700']" class="pl-[62px]">
                  <p class="py-3 tracking-wide text-base leading-relaxed text-body-color text-dark-6">
                    {{ faq.text }}
                  </p>
                </div>
              </transition>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>

    
  </section>
</template>

<script>
import { computed, ref } from 'vue';

export default {
  setup() {
    const faqs = ref([
      { id: 1, header:'What is Nrithya ? ', text :`The Dance Fest of KLU is an exciting and vibrant cultural event hosted by the dance wings (Fusion, Narthana) of KLU. It serves as a celebration of various dance forms and a platform for students to showcase their dance talents and creativity.`},
      
      { id: 2, header:'What are the events conducted in Nrithya ?', text:'Mudhra Classical (Solo), Nirvana Classical (Group), Sizzle and Shake Western & Mass (Group), Lights Camers Dance Filmy (Group), Beat Breakers Street Dance (Group), Theme Fiesta Thematic Dance (Group), RRR-Regional Rhythm Revival Folk(Group), Groove Gala Hip-Hop & Urban (Group), Groove Mania Hip-Hop & Urban (Solo), Romeos and Juliets (The Duet Dance).' },
      
      { id: 3, header:'Does Nrithya events have any cash prize ', text:' Yes, you can find it in corresponding event guidelines and additionally participation certificate will also be provided to every participant.' },
      { id: 4, header:'Can outsiders, other than college students participate ?', text:'Yes, they can register through our official website and participate.' },
      { id: 5, header:'What dance forms are featured in nrithya ?',text:[
        'Classical',
        'Western',
        'Salsa',
        'Mass',
        'Hip - Hop',
        'Folk',
        'NOTE:- Only above dance forms are accepted and should be selected based on the mentioned event category.',
      ]},
      // { id: 6, header:'How can participants register for nrithya ?',text:'Participants can register through the official website(link) and spot registration are also accepted.'},
      // { id: 7, header:'What is the max team size for a group performace ?',text:'Each event has different team size and you can find the complete information in the guidelines.'},
      // { id: 8, header:'Is accommodation available for outsiders ?',text:'Yes'},
      // { id: 9, header:'How many events can a person can participate ?',text:'A person can participate in any no.of events but shouldnt participate in the same event more than once.'},
      // { id: 10, header:'Where can I find the guidelines of Nrithya ?',text:'You can find all the guidelines regarding every event in our Event Page.'},
      // { id: 11, header:'On what basis participants are finilized ?',text:'Finalizing strategy of each event will be based on judges.'},
      // { id: 12, header:'When pariticipants have arrived,whom should they meet for enquiry ?',text:'Hospitality team will be available at the entrance and they will take care of your arrangements'},
      // { id: 13, header:'Are fireworks or smoke related items allowed for the performance ?',text:'No, smoke evolving items are not encouraged in any dance event.'},
      // { id: 14, header:'Can participants come along with their families to watch the performance ?',text:'Yes, parents are allowed to watch performences but it is mandatory for every person to register.'},
      // { id: 15, header:'Does students of other colleges should bring their ID Card ?',text:'Yes, participants should mandatorily carry their student college ID.'},
    ]);

    const activeFaq = ref(null);

    const handleToggle = (faqId) => {
      activeFaq.value = activeFaq.value === faqId ? null : faqId;
    };

    return {
      faqs,
      activeFaq,
      handleToggle,
    };
  },
};
</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: all;
  transition-duration: 500ms;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(-20px); 
}
</style>