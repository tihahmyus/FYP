 // JavaScript to change the content dynamically when the sidebar links are clicked
 function loadContent(contentId) {
    const contentMap = {
        "cat": `
            <h2>Know your feline friends!</h2>
            <p>Cat (Felis Catus) is a domesticated member (felid) of the Felidae family. Felidae is divided between two groups:</p>
            <ul>
                <li>Ones who roar (lions, tigers, leopards)</li>
                <li>Ones who purr (domestic cats, bobcats, cougars)</li>
            </ul>
        `,
        "catIslam": `
            <h2>Cats in Islam</h2>
            <p>In general, the original, actual law of keeping a cat is a must. This is based on the famous method of jurisprudence,</p>

            <p>الأَصْلُ فِي الأشْيَاءِ الإبَاحَة</p>

            <p>Meaning: The original law for every matter is must. </p>

            <p>In the issue of keeping cats, there is no text from the Sharia that tells a person to defend, or prohibit against such act towards cats. 
            Therefore, keeping a cat goes back to the original law which is necessity and it is on one's choice.</p>
            
        `,
        "catPurity": `
            <h2>Issues regarding Taharah</h2>
            <p>Cats are clean and not impure.</p>
            <p>Kabsyah bint Ka'ab bin Malik reported that one day Abu Qatadah was in the house, and she shad prepared for him a container of water to use as 
            ablution water. Then, a cat came to drink the water. Abu Qatadah just let the cat drink water from the container. Then, Abu Qatadah noticed that 
            Kabsyah was looking at him and he asked: "Do you feel strange, my nephew?" Kabsyah replied: "Yes."  Then Abu Qatadah explained that the Prophet 
            SAW once said:</p>

            <p>إِنَّهَا لَيْسَتْ بِنَجَسٍ, إِنَّمَا هِيَ مِنَ الطَّوَّافِينَ عَلَيْكُمْ, أَوِ الطَّوَّافَاتِ</p>
            <p>Meaning: "Indeed the cat is not impure because it is an animal that roams around you."</p>
            <p>Narration of al-Tirmizi (92); Abu Daud (75); al-Nasa'i (68); Ibn Majah (367)</p>
            <p>From this, we know that there is a special relaxation on law given to cats because they are animals that usually roam around in human habitations and kept as pets.</p>

            <h3>How about the purity status of the fur?</h3>
            <p>It is depends on the type of animal whether it is from the halal to eat group or not.</p>

            <ul>
                <li>If the feather falls or plucked from a halal to eat animal such as 	chicken, goat and cow, then it is pure.</li>
                <li>If the hair is from animal that is not halal to be eaten, it is impure.</li>
                <li>If it falls from animal that is halal to eat, but after its death, it is impure</li>
            </ul>

            <p>This is as explained by Imam al-Ghamrawi that:</p>
            <p>"The part separated from a living animal (the law) is like a carcass, which is the carcass of a living animal. If the carcass is in the category of impurity then its part
             is also impurity, unless it was not separated while living the law is pure. Unless it is also (parts that are separated when alive) the hair of an animal that is lawful to eat, its feathers or feathers, 
             then the law is pure. While the part that is separated after death from an animal that is forbidden to be eaten or eaten lawfully (died not by slaughter) then the law is impure." (Refer to al-Siraj al-Wahhaj, 1:23)</p>

            <h3>What if I perform my prayers with cat fur stick on my shirt?</h3>
            <p>As cats are considered as animal that cannot be eaten, therefore fur that falls off their body are ruled as impure or najis. However, according to Imam al-Shafie, if the cat hairs that stick to the clothes are just in a little amount, 
            it is a forgiven najis (al-ma'fuwat).</p>
            <p>This is as stated by Imam al-Khatib al-Syirbini that:</p>
            <p>وَعَنْ يَسِيرِهِ عُرْفًا مِنْ ‌شَعْرٍ ‌نَجِسٍ مِنْ غَيْرِ نَحْوِ كَلْبٍ</p>
            <p>Meaning: A customary small number ('uruf) of hairs that are unclean from animals other than dogs are forgiven.</p>
            <p>Therefore, the prayers are still accepted. However, it is preferable to clean ourself first or change into a clean clothing before performing prayers.</p>
        `,
        "dog": `
            <h2>Know your canine friends!</h2>
            <p>Dog or scientifically called as Canis familiaris, is a member of the Canidae family. Dogs descend from a species of wolf. Not only being kept next to humans to aid in hunting and act as a protector, the characteristics of loyalty,
             friendships and affection dogs have make them a good friend for their owner!</p>
            <p>The World Canine Organization or best known by FCI in 2013 has recognised 339 breeds of dogs all around the world. And they are divided into groups based on the dog's purposes, or their appearance.</p>
        `,
        "dogIslam": `
            <h2>Dogs in Islam</h2>
            <p>The jurists agreed that the law of keeping dogs without reason is haram even it can reduce the reward of a person's worship. The Prophet SAW said:</p>
            <p>Meaning: "Whoever keeps a dog other than for the purpose of hunting, as a guardian of livestock or guardian of a garden, then his reward will be reduced by two (2) qirath every day." (Muslim History)</p>
            <p>Muslims are not allowed to keep dogs unless for several purposes which are:</p>
            <ul>
                <li>To hunt</li>
                <li>To watch for crops and livestock</li>
                <li>Helping the cops and SAR operations</li>
                <li>To ensure safety</li>
            </ul>

            <p>In addition, there are other hadiths that state that a house that keeps a dog will be prevented from receiving the blessings of Allah SWT. This is according to the hadith narrated by Abu Talhah RA, that the Prophet SAW said:</p>
            <p>لاَ تَدْخُلُ المَلَئِكَةُ بَيْتًا فِيهِ كَلْبٌ, وَلَ صُورَةُ تَمَاثِيلَ</p>
            <p>Meaning: "Angels do not enter a house where there are dogs and statues of living creatures". (Narrated by Bukhari) </p>
            <p>Imam al-Nawawi stated in Syarh al-Nawawi 'ala Sahih Muslim that the reason angels do not enter a house where there are dogs is:</p>
            <ul>
                <li>Dogs usually eat feces.</li>
                <li>Some dogs are also referred to as devils as in some hadith narrations and angels are the opposite of devils.</li>
                <li>Dogs also usually smell bad and angels don't like bad smells.</li>
                <li>There is a ban on keeping dogs, so the person who keeps them will be punished with an angel who brings blessings not entering his house.</li>
            </ul>

            <h3>Does this mean Islam hate dogs?</h3>
            <p>No, and we are still told to do kindness to dogs. Mentioned in the hadith about a story of a prostitute giving drink to a thirsty dog by taking water 
            from the well by using her shoes. Allah SWT forgives her sin because of this action. From Abu Hurairah RA, that the Prophet SAW said:</p>
            <p>َنَّ امْرَأَةً بَغِيًّا رَأَتْ كَلْبً فِي يَوْمٍ حَارٍّ يُطِيفُ بِبِئْرٍ, قَدْ عَدلَعَ لِسَانَهُ مِنَ الْعَطَشِ, فَنَزَعَتْ لَهُ بِمُوقِهَا فَغُفِرَ لَهَا</p>
            <p>Meaning: "one hot day a prostitute saw a dog while walking around a well. The dog stuck out its tongue because of thirst. The woman took off her shoes 
            and gave him a drink, thus his sins were forgiven". (Muslim History)</p>
            <p>Dog was also mentioned in the Quran, as an animal that is friendly with the fighters of truth (Ashab Al- Kahfi). This dog was named qidmir. In Surah 
            Al-Kahf verse 18, the verse told us about this dog accompanying Ashab Al-Kahfi and stayed with them during their struggle against the oppressive regime of their time.</p>
            <p>"and you thought they were awake, but they were sleeping; and We turned them over in their sleep to the right and to the left; while their dog stretched out his 
            two front legs near the cave door; if you see them, you will certainly turn and run away from them, and you will certainly feel very afraid of them."</p>
            
        `,
        "dogPurity": `
            <h2>Issues regarding Taharah</h2>
            <p>There is a special way to clean up our body parts or stuff after they got in contact with dogs. Ibn Taymiyyah mentions three views of jurists regarding the impurity of dogs</p>
            <ul>
                <li>Maliki Scholars: who hold that dog is pure even its saliva.</li>
                <li>Shafi'i school and one of two narrations from Imam Ahamd bin Hanbal: Dog is impure, even its fur.</li>
                <li>Hanafi School and other narration from Imam Ahmad: Dog's saliva is impure and the fur is pure.</li>
            </ul>

            <p>According to Ibn Taymiyyah, the third view is believed to be the most correct. Accordingly, if one’s clothes get wet from touching a dog’s fur, this doesn’t render them najis (impure),
            while if a dog licks a pot or a container, what it touches must be thrown away and the container should be washed off. Also, if one touches the dog’s fur after making wudu, it does not 
            break the wudu, but if one gets touched with dog’s saliva, then one has got tainted with najasa (impurity) which must be removed.</p>
            
            <h3>How to wash off the impurity tainted by a dog's lick?</h3>
            <p>Wash the licked container 7 times, and water used for the first wash is mixed with earth until it becomes muddy.</p>
            <p>Abu Hurairah reported that the Messenger of Allah (peace and blessings be upon him) said: “Purifying a container that a dog licks is done by washing it seven times, the first 
            time with pure soil (that is, water mixed with earth until it becomes muddy).” (Muslim, Ahmad, Abu Dawud, and Al-Bayhaqi)</p>
        `,
        "allergen": `
            <h2>Pets that are safe for those with allergic!</h2>
            <p>Have allergy but want to own a pet? Know some pets that are hypoallergenic and allergy-friendly!</p>
            
            <h4>Dog (kalau boleh add gambo)</h4>
            <ul>
                <li>Poodle</li>
                <li>Bichon Frise</li>
                <li>Yorkshire Terrier</li>
            </ul>

            <h4>Cat (kalau boleh add gambo)</h4>
            <ul>
                <li>Siberian</li>
                <li>Balinese</li>
                <li>Sphynx</li>
            </ul>
            <p>Although no pet is completely allergen free, hypoallergenic dog and cat breeds offer allergy sufferers a 
            potential solution as they produce fewer allergens compared to other breeds. It’s also important to weigh your lifestyle 
            preferences and the nature of the breed in a pet.</p>
        `,
        "diet": `
            <h2>YAY and NAY in Feeding Your Paw Buddies</h2>
            <p>nanti cari gambo</p>
        `,
        "vaccine": `
            <h2>Vaccination for Pets</h2>
            <p>Both cats and dogs have different diseases that could affect them, so they have different vaccination requirements.</p>
            <h3>Type of pets vaccines</h3>
            <h4>Core vaccines</h4>
            <p>This type of vaccines is essential for all pets, regardless of their lifestyle pr environment. For dogs, core vaccines 
            include rabies, distemper, parvovirus, and adenovirus. For cats, core vaccines include rabies, feline panleukopenia (feline distemper), calicivirus, and rhinotracheitis. </p>
            <h4>Non-core vaccines</h4>
            <p>This type of vaccines is based on pet's lifestyle, environment and risk factors</p>
            
            <h3>Scheduling</h3>
            <h4>Puppies and Kittens</h4>
            <ul>
                <li>starting from 6-8 weeks old</li>
                <li>given every 3-4 weeks until they are about 16 weeks old</li>
            </ul>
            <h4>Adults</h4>
             <ul>
                <li>Dogs will need to take their booster shot every year.</li>
                <li>Cats will have to take the booster shot from range between 12-36 months.</li>
            </ul>
            <p>**depends on specific vaccine or veteranarian's recommendation</p>

            <h3>TIPS TO PREPARE YOU PET FOR A VACCINE APPOINTMENT!!</h3>
             <ul>
                <li>Stay Calm as pets can pick up your emotions.</li>
                <li>Prepare a comfort item to help pet feel more at ease.</li>
                <li>Handle with care as pets can become nervous in a new surrounding.</li>
                <li>Keep your pet hydrated, it will help pets feel more comfortable.</li>
            </ul>
        `
    };
    document.getElementById("content-frame").innerHTML = contentMap[contentId];
}