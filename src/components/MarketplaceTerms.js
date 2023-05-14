import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
import PerfectScrollbar from "react-perfect-scrollbar";

function MarketplaceTerms() {
  const router = useRouter();
  const [info, setInfo] = useState(false);
  const [cookies, setCookie] = useCookies(["Market_Terms_Service"]);
  const {t}=useTranslation()
  useEffect(() => {
    if (cookies.Market_Terms_Service) {
      setCookie("Market_Terms_Service", true);
      setInfo(false);
    } else {
      setInfo(true);
    }
  }, []);
  const handleButton = () => {
    router.back();
    setInfo(false);
  };
  return (
    <div>
      {info && (
        <div className="warning-area">
          <div className="warning-info">
           
            <h2>{t("ROX NFT Marketplace Terms and Conditions")}</h2>
            <PerfectScrollbar>
              <div className="warning-info-content">
                <h3>{t("1. Acceptance of NFT Terms; Modification of NFT Terms")}</h3>
                <p>
                  
                  {t("Welcome to the ROX Games NFT Marketplace owned and operated by Hash Muse Pte Ltd, whose address is at 531A Upper Cross Street, #04-95 Hong Lim Complex, Singapore (“Company”, “we”,“us”, or “our”).")}
                  {t("These Terms and Conditions (“NFT Terms”) constitute a legally binding agreement between Company and each registered or unregistered end user (each, a “User”,“you” or “your”) of the ROX Games NFT Marketplace located at nft.")}
                  {t("ROX Games.com or such other URL as may be designated by Company from time to time, as well as any mobile apps or other related services or applications thereto (collectively, the “NFT Marketplace”).")}
                   {t("The NFT Marketplace is considered part of the “ROX Games Services” as defined in the ROX Games Terms of Use (“ROX Games Terms”) set forth here.")}
                    {t("Company is a “ROX Games Operator” under the ROX Games Terms.")}
                     {t("The ROX Games Terms are incorporated by reference into these NFT Terms, and also govern your use and access of the NFT Marketplace.")}
                      {t("In the event of a conflict between these terms of these NFT Terms and the ROX Games Terms, the NFT Terms will supersede and control.")}
                      {t("Please carefully review these NFT Terms and the ROX Games Terms.")}
                      {t("By accessing and using the NFT Marketplace (including by purchasing or bidding on any items herein), you are deemed to have read, accepted, executed and agreed to be bound by these NFT Terms (including the ROX Games Terms as incorporated by reference herein).")}
                       {t("We may change or amend the NFT Marketplace or these NFT Terms at any time at our sole and absolute discretion.")}
                        {t("Any changes to these NFT Terms will be in effect as of the “Last Revised” date referred to at the top of this page.")}
                         {t("You acknowledge and agree that the form and nature of the NFT Marketplace, and any part of it, may change from time to time without prior notice to you, and that we may add new or remove existing features and change any part of the NFT Marketplace.")}
                          {t("IF ANY PROVISION OF THESE NFT TERMS OR THE ROX Games TERMS OR ANY FUTURE CHANGES ARE UNACCEPTABLE TO YOU,DO NOT USE OR CONTINUE TO USE THE NFT MARKETPLACE. ")}
                          {t("YOUR CONTINUED USE OF THE NFT MARKETPLACE FOLLOWING THE POSTING OF ANY NOTICE OF ANY CHANGE TO THESE TERMS OF SERVICE SHALL CONSTITUTE YOUR ACCEPTANCE AND AGREEMENT TO SUCH CHANGE.")}
                          {t("ARBITRATION NOTICE: THE ROX Games TERMS CONTAIN AN ARBITRATION CLAUSE.")}
                           {t("EXCEPT FOR CERTAIN TYPES OF DISPUTES MENTIONED IN THAT ARBITRATION CLAUSE AND GOVERNING LAW CLAUSE, YOU AND COMPANY AGREE THAT DISPUTES BETWEEN US WILL BE RESOLVED BY MANDATORY BINDING ARBITRATION IN ACCORDANCE WITH THE ARBITRATION CLAUSE AND GOVERNING LAW CLAUSE IN THE ROX Games TERMS, AND YOU AND COMPANY WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS-ACTION LAWSUIT OR CLASS-WIDE ARBITRATION. ")}
                           {t("FOR THE AVOIDANCE OF DOUBT,COMPANY IS A “ROX Games OPERATOR” FOR THE PURPOSE OF THE ARBITRATION CLAUSE.")}
                </p>
                <h3>{t("2. Overview of the NFT Marketplace")}</h3>
                <p>
                  {t("The NFT Marketplace provides you with the opportunity to create (or as we call it, mint), sell, purchase, bid on, collect, trade, showcase and otherwise transact digital blockchain collectibles, which may be represented as a non-fungible token (“NFT”) linked with certain digital media and art (“NFT Media”).")}
                  {t("We facilitate transactions between buyer and seller of an NFT, but we are not a party to any agreement between buyer and seller of an NFT on the NFT Marketplace.")}
                   {t("We collect revenue on the NFT Marketplace via transaction fees and other applicable fees which we display when you interact with the NFT Marketplace.")}
                   {t("For the avoidance of doubt, NFTs transacted on the NFT Marketplace are considered “Digital Assets” as defined in the ROX Games Terms.")}  
                   {t("Company reserves the right to (but is not required or obligated to be) take any action in relation to any disputesarising from purchases via the NFT Marketplace, including inconnection with any auctions or other purchase methods.")}
                    {t("For NFT Sellers: By minting, providing, or selling an NFT through the NFT Marketplace, you hereby represent and warrant that you own all legal right, title and interest in all intellectual property rights to the NFT Media linked or associated with such NFT, or you are legally authorized by the intellectual property owner to mint, provide or sell the NFT on the NFT Marketplace.")}     
                   {t("Except for NFTs minted on the NFT Marketplace, in order to list any NFT for sale on the NFT Marketplace, you must first deposit the NFT for sale for custody with Company until such time as the NFT is sold or you decide to remove the NFT from the NFT Marketplace.")}
                   {t("For clarity, Company has no obligation or liability to you for keeping, storing, or helping you recover any NFT Media associated with your NFTs.")}
                  {t("For NFT Buyers: When you purchase an NFT, you own the NFT that is associated with certain NFT Media, but you do not own any intellectual property rights in such NFT Media except for the license grants expressly set forth herein.")}
                   {t("In certain cases, we may help to evaluate or provide you with information about a seller of an NFT.")}
                   {t("However, such information is provided for informational purposes only.")}
                   {t("You bear full responsibility for verifying the authenticity, legitimacy, identity of any NFT you purchase on the NFT Marketplace.")}
                    {t("We make no representations, guarantees or promises about the identity, legitimacy, legality, decency, quality or authenticity of any NFT on the NFT Marketplace.")}
                   {t("Notwithstanding any sale clearing period that may be implemented for the sale of any NFTs, you acknowledge that Company is not required or obligated to adjudicate or decide on any disputes in connection with any NFTs sold on the NFT Marketplace.")}
                </p>
                <h3>{t("3. License to Your Content")}</h3>
                <p>
                  {t("In connection with your use of the NFT Marketplace, you may be able to post, upload, or submit content to be made available through the NFT Marketplace, including NFT Media that is tied to NFTs you wish to sell on the NFT Marketplace as a seller, and any other content associated with your NFTs (“Your Content”).")}
                  {t("You retain all rights to Your Content you post, upload, submit, or otherwise made available through the NFT Marketplace, except for rights expressly granted herein.")}
                  {t("In order to operate the NFT Marketplace, we must obtain from you certain license rights in Your Content so that actions we take in operating the NFT Marketplace are not considered legal violations.")}
                  {t("Accordingly, by using the NFT Marketplace and uploading Your Content or otherwise made Your Content available, you grant us a license to access, use, host, cache, store, copy, reproduce, transmit, display, publish, distribute, adapt and modify (for technical purposes, e.g., making sure content is viewable on smartphones as well as computers and other devices) Your Content in any and all media or distribution methods (now know or later developed) but solely as required to be able to operate and provide services of the NFT Marketplace.")}
                  {t("You agree that this license includes the right for us to provide, promote, and improve the NFT Marketplace and to make Your Content available to other companies, organizations or individuals for the distribution, promotion or publication of Your Content on other media and services.")}
                  {t("You agree that these rights and licenses are royalty free, transferable, sub-licensable, worldwide and irrevocable (for so long as Your Content is stored with us), and include a right for us to make Your Content available to, and pass these rights along to, others with whom we have contractual relationships related to the provision of the NFT Marketplace, and solely for purpose of providing the NFT Marketplace, and to otherwise permit access to disclose Your Content to third parties if we determine such access is necessary to comply with our legal obligations.")}
                  {t("As part of the foregoing license grant you agree that the other Users of the NFT Marketplace shall have the right to comment on and/or tag Your Content and/or to use, publish, display, modify or include a copy of Your Content as part of their own use of the NFT Marketplace; except that the foregoing shall not apply to any of Your Content that you post privately for non-public display on the NFT Marketplace.")}
                  {t("By posting or submitting Your Content to the NFT Marketplace, you represent and warrant that you have, or have obtained, all rights, licenses, consents, permissions, power and/or authority necessary to grant the rights granted herein for Your Content.")}
                  {t("You agree that Your Content will not contain material subject to copyright or other proprietary rights, unless you have the necessary permission or are otherwise legally entitled to post the material and to grant us the license described above.")}
                  {t("If you sell an NFT through the NFT Marketplace, you grant to the buyer of the NFT a worldwide, non-exclusive, non-transferable, royalty-free license to use, copy, and display the NFT Media for such purchased NFT, solely for the following purposes: (a) for the buyer’s own personal use; (b) as part of a marketplace that permits the purchase and sale of such NFTs, provided that the marketplace cryptographically verifies each NFT’s owner’s rights to display the NFT Media for their NFTs to ensure that only the actual owner can display the NFT Media; or (c) as part of a third party website or application that permits the inclusion, involvement, or participation of your NFT, provided that the website/application cryptographically verifies each NFT’s owner’s rights to display the NFT Media for their NFTs to ensure that only the actual owner can display the NFT Media, and provided that the NFT Media is no longer visible once the owner of the NFTs leaves the website/application (the “NFT Purchase License”).")} 
                  {t("If you are a buyer of NFTs, then you acknowledge and agree that the NFT Purchase License set forth above only lasts as long as you are the valid owner and holder of the NFT associated with the licensed NFT Media.")}
                  {t("If you sell or transfer the NFT to another person, this NFT Purchase License will transfer to such other owner or holder of the NFT, and you will no longer have the benefits of such NFT Purchase License.")}
                  {t("Unless otherwise specified by seller of an NFT in writing, your purchase of an NFT does not give you the right to publicly display, perform, distribute, sell or otherwise reproduce the NFT or its related NFT Media for any commercial purpose.")}
                  {t("If you sell an NFT, you agree that you will not have any claims against Company for any breach of these NFT Terms by a purchaser, including if they make commercial use of the related NFT Media in breach of these NFT Terms.")}
                  {t("We have the right to remove or refuse to post any of Your Content, including NFTs, (a) for any or no reason in our sole discretion; and (b) take any action with respect to Your Content that we deem necessary or appropriate in our sole discretion, including if we believe that Your Content violates these NFT Terms, infringes any intellectual property right of any person or entity, threatens the personal safety of Users of the NFT Marketplace or the public, or could create liability for Company or other Users.")}
                </p>
                <h3>{t("4. Specific Terms for the Premium Platform and Creators")}</h3>
                <p>
                {" "}{t("As part of the NFT Marketplace, Company offers a premium platform (the “Premium Platform”) which only allows creators that are invited or otherwise approved by Company (“Invited Creators”) to mint and sell NFTs (the “Creator’s NFTs”) associated with their original NFT Media (the “Creator’s NFT Media”).")}
                  {t("Company may enter into an addendum with any Invited Creator (a “Creator Addendum”) setting forth terms for using the Premium Platform as an Invited Creator.")}
                  {t("If there is a conflict between a Creator Addendum and these NFT Terms, the provisions of the Creator Addendum shall take precedence for such Invited Creator.")}
                  {t("Invited Creator hereby grants to Company a perpetual, irrevocable and exclusive right and license to use, reproduce, display the Creator’s NFT Media in connection with the promotion of the Creator’s NFT Media, the Creator’s NFTs and the NFT Marketplace.")}
                  {t("Invited Creator hereby grants to Company a perpetual, irrevocable and exclusive right and license to use, reproduce, display the Creator’s NFT Media in connection with the promotion of the Creator’s NFT Media, the Creator’s NFTs and the NFT Marketplace.")}
                  {t("In order for Company to exercise its rights to the Creator’s NFT Media, Invited Creator will provide Company with high-resolution images and other embodiments of such NFT Media as reasonably requested by Company.")}
                  {t("Company shall have the sole control over the promotion and marketing of the Creator’s NFTs, including the sole discretion to select certain Creator’s NFTs or Invited Creators to participate in events hosted by Company.")}
                  {t("As reasonably requested by Company, Invited Creator will support Company in the promotion or marketing of the Creator’s NFTs through participation in the marketing activities as agreed upon by the parties in a Creator Addendum.")}
                  {t("In connection with the promotion of the Creator’s NFTs, Invited Creator hereby grants Company a right to use the name, image, photo, biography, signature and likeness of the Invited Creator solely in connection with the marketing and promotion of the Creator’s NFTs.")}
                  {t("Invited Creator will not engage in any promotion or marketing of Company, the NFT Marketplace, or any Creator’s NFTs in a manner that is misleading or deceptive or not in compliance with applicable law.")}
                  {t("Invited Creator must disclose any material connection between Invited Creator and Company in any such promotion in a clear and conspicuous manner, including in close proximity to any such marketing statements. ")}
                  {t("Invited Creator will not promote or market the Creator’s NFTs in a manner intended to give buyers the impression that such NFTs are investment products or that they can expect capital appreciation or derive profits from purchase of such NFTs, or indicate that such NFTs may be characterized as securities or any other form of regulated investment product in any applicable jurisdiction.")}
                  {t("If requested by Company, Invited Creator will reasonably cooperate with Company to validate the authenticity of the Creator’s NFTs and the Creator’s NFT Media. ")}
                  {t("Invited Creator acknowledges and agrees that Company will charge a platform fee which is 10% (or other percentage as provided in a Creator Addendum) of the purchase price for any sale of the Creator’s NFTs on the Premium Platform.")}
                  {t("For the avoidance of doubt, any use of or interaction with the Premium Platform by any User (including an Invited Creator) is governed by terms in this Section 4 and the rest of these NFT Terms not in direct contradicton with terms in this Section 4.")}{" "}    
                </p>
                <h3>
                  {t("5. Specific Terms for the Standard Platform and Initial Sale")}
                </h3>
                <p>
                  {t("As part of the NFT Marketplace, Company offers a standard platform (the “Standard Platform”) which allows any registered Users to create NFT collections (subject to paying an associated smart contract deployment fee) and mint and sell NFTs (the “Standard NFTs”) associated with the User’s NFT Media. Creators of Standard NFTs can also set their own royalty fee for their NFT collections. ")}
                  {t("For an initial sale of a Standard NFT (i.e. the first instance a newly minted Standard NFT is sold by the creator to a buyer), the transaction proceeds from the sale of the Standard NFT (the “Transaction Proceeds”) shall be frozen in the seller’s account for a pre-specified period of time (the “Initial Sale Clearing Period”) after which the Transaction Proceeds will be released to the seller.")}
                  {t("Company may extend the Initial Sale Clearing Period for a further period of time (the “Extended Clearing Period”) provided that: (a) within the Initial Sale Clearing Period, a bona fide complaint is raised by the buyer or a third party for claims that relate to intellectual property infringement, the identity, legitimacy, authenticity and/or validity of legal title of the Standard NFT, violation of the ROX Games Terms , these NFT Terms and/or violation of the terms of the NFT sale as agreed between the seller and the buyer.")}
                  {t("For any claim raised by the buyer, the buyer shall furnish proof that the Standard NFT at issue remains in their account and agrees to have the NFT frozen pending resolution of the dispute.")}
                  {t("The buyer or third party submitting a complaint shall agree that ROX Games may supply a copy of this complaint to the seller, including the buyer/third party’s identity and contact details.")}
                  {t("(b) Company suspects the Standard NFT, the Standard NFT transaction, the seller’s activity in relation to the Standard NFT and/or the Transaction Proceeds to be in violation of the applicable terms of sale (including the ROX Games Terms and these NFT Terms) or any applicable laws and regulations.")} 
                  {t("After the Extended Clearing Period, Company may only continue to freeze if legal proceedings or investigations by the authorities have been commenced against the seller (and where such legal proceedings or investigations require the Transaction Proceeds to be frozen ), or in such other circumstances that the Company deems appropriate in its sole discretion.")}
                  {t("For the avoidance of doubt, the Company reserves the right to freeze and take such other action in respect of the Transaction Proceeds (being Digital Assets or funds in a ROX Games User’s Account) in accordance with the ROX Games Terms, regardless of whether the situation is expressly provided for under this Section 5.")} 
                  {t("In such circumstances, Company has the discretion to extend the freeze for any further duration pending the resolution of the dispute.")} 
                  {t("If Company does not receive proof that such a formal legal action or complaint has been filed within the Extend Clearing Period, Company may be entitled to release the Transaction Proceeds to the seller.")}
                  {t("If the complainant and the seller are able to resolve the dispute at any stage, Company will require written confirmation of the resolution of the dispute from all parties before it may proceed to release the Transaction Proceeds to the seller.")}
                  {t("In no circumstances shall Company bear any liability or responsibility for any act or omission done in relation to the freezing (or omission to freeze) the Transaction Proceeds, and there shall be no freezing as part of any secondary sale of Standard NFTs. ")}
                  {t("In addition, by minting a Standard NFT, you acknowledge and agree that you have read and accept the “NFT Minting Rules”, which includes examples of inappropriate content and our right at our sole discretion to, among other things, delist or otherwise remove your NFT collection(s) or Standard NFTs from the NFT Marketplace. ")}
                  {t("For the avoidance of doubt, any use of or interaction with the Standard Platform by any User is governed by terms in this Section 5 and the rest of these NFT Terms not in direct contradiction with terms in this Section 5.")}
                </p>
                <h3>{t("6. Copyright Policy")}</h3>
                <p>
                  {t("Company may, but is not obligated to, monitor the NFTs, NFT Media and Your Content uploaded to the NFT Marketplace for any infringement of a third party’s intellectual property rights.")}
                  {t("However, Company cannot undertake to review all such content before it is posted on the Service, and cannot ensure prompt removal of objectionable content after it has been posted.")}
                  {t("Accordingly, Company assume no liability for any action regarding transmissions, communications, or content provided by any user or third party.")}
                  {t("Company will take down NFTs in response to Digital Millennium Copyright Act takedown notices and/or other intellectual property infringement claims and will terminate a seller’s access if the seller is deemed to be a repeat infringer.")}
                  {t("If you believe that any text, graphics, photos, audio, videos or other materials or works uploaded, downloaded or appearing on the Services have been copied in a way that constitutes copyright infringement, you may submit a notification to our legal department, by providing the following information in writing: (a) identification of the copyrighted work that is claimed to be infringed; (b) identification of the allegedly infringing material that is requested to be removed, including a description of where it is located on the NFT Marketplace; (c) information for our copyright agent to contact you, such as an address, telephone number and e-mail address; (d) a statement that you have a good faith belief that the identified, allegedly infringing use is not authorized by the copyright owners, its agent or the law; (e) a statement that the information above is accurate, and under penalty of perjury, that you are the copyright owner or the authorized person to act on behalf of the copyright owner; and (f) the physical or electronicsignature of a person authorized to act on behalf of the owner of the copyright or of an exclusive right that is allegedly infringed. ")}
                  {t("Notices of copyright infringement claims should be sent by mail to: Hash Muse Pte Ltd, Attn: Legal Department, 531A Upper Cross Street, #04-95 Hong Lim Complex, Singapore; or by e-mail to Copyright.NFT@ROX Games.com. ")}
                  {t("It is our policy, in appropriate circumstances and at our discretion, to disable or terminate the accounts of Users who repeatedly infringe copyrights or intellectual property rights of others.")}
                  {t("Any User of the NFT Marketplace who has uploaded or posted materials identified as infringing as described above may supply a counter-notification.")}
                  {t("When we receive a counter- notification, we may reinstate the posts or material in question, in our sole discretion.")}
                  {t("To file a counter-notification with us, you must provide a written communication (by regular mail or by email) that sets forth: (a) your name, address, telephone number, e-mail address and physical or electronic signature; (b) identification of the material that has been removed or to which access has been disabled and the location at which the material appeared before it was removed or access to it was disabled; and (c) a statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification of thematerial to be removed or disabled.")}
                  {t("Please note that you will be liable for damages if you materially misrepresent that content or an activity is not infringing the copyrights of others.")}
                </p>
                <h3>
                  {t("7. Restrictions on Marketing and Promotional Activities and Logo Use")}
                </h3>
                <p>
                  {t("Any marketing and promotional activities, whether in digital, print or any other form, that you may conduct in connection with your use of the NFT Marketplace are subject to our review and prior written approval. We will only allow marketing and promotional activities to be referred to strictly as collaboration with ROX Games NFT (but not with ROX Games).")}
                  {t("You should submit any such plan relating to marketing and promotional activities and materials for our review and provide any information that we reasonably request. The plan should contain all key information including but not limited to details of the relevant NFT projects, all planned media channels or distributions, relationships between different counterparties, etc.")}
                  {t("No mention of token-related topics or any implication relating to token issue or listing, or collaboration with ROX Games may be included.")}
                  {t("You must not create and/or publish any marketing or promotional materials that may: (a) be deemed false and misleading; (b) breach or infringes the rights of any third parties, including intellectual property rights; (c) breach any applicable laws and regulations; (d) breach any of our guidelines or instructions that may be made available to you; and (e) bring into disrepute or damage the goodwill of ROX Games and/or NFT Marketplace.")}
                  {t("We reserve the right to request changes or suspension to such plan and activity as we deem necessary and reject any plan and activity in its entirety in our absolute discretion.")}
                  {t("Subject to further guidelines that may be made available to you, we may permit you to use the ROX Games Marks, at our sole discretion, for the sole purposes of marketing or promoting your NFTs on the NFT Marketplace. Terms of such guidelines made available to you shall be incorporated into these terms by express reference herein.")}
                  {t("You must not use ROX Games’s name, logo, trade names and any other marks (“ROX Games Marks”) without our prior written approval. You agree to indemnify us against all liabilities, costs, expenses, damages and losses (including but not limited to any direct, indirect or consequential losses, loss of profit, loss of reputation, loss of goodwill and all interest, penalties and legal costs (calculated on a full indemnity basis) and all other professional costs and expenses) suffered or incurred by us arising out of or in connection with any such marketing and promotional activities that you conduct in connection with your use of the NFT Marketplace.")}
                </p>
                <h3>{t("8. Verification and Payment")}</h3>
                <p>
                  {t("When you make purchases through the NFT Marketplace, including, without limitation, any purchase for NFTs, you must provide and maintain valid payment information in connection with your ROX Games Account (as defined in the ROX Games Terms) with us.")}
                  {t("You represent and warrant that you are authorized to use the payment method you use via the NFT Marketplace to make any purchase.")} 
                  {t("You authorize us to charge your payment method for the total amount of your purchase price. Your order may be suspended or cancelled for any reason, including if the payment method cannot be verified, is invalid or is otherwise not acceptable.")} 
                  {t("Other payments terms for purchases are set forth in the relevant sections of the ROX Games Terms. We have no liability to you or to any third party for any claims or damages that may arise as a result of any payments or transactions that you engage in via the NFT Marketplace, or any other payment or transactions that you conduct via the NFT Marketplace.")}
                  {t("We do not provide refunds for any purchases that you might make on or through the NFT Marketplace – whether for NFTs or anything else.")} 
                  {t("You will be solely responsible to pay any and all sales, use, value-added and other taxes, duties, and assessments (except taxes on our net income) now or hereafter claimed or imposed by any governmental authority associated with your use of the NFT Marketplace or NFTs, except for income taxes levied on us as a result of such purchases of NFTs.")}
                </p>
                <h3>{t("9. Assumption of Risks")}</h3>
                <p>
                  {t("DO YOUR OWN RESEARCH. You accept and acknowledge that (i) the value of an NFT is subjective; prices of an NFT are subject to volatility and fluctuations in the price of cryptocurrency can also materially and adversely affect NFT prices; (ii) a lack of use or public interest in NFTs could negatively impact the potential utility of NFTs; (iii) the regulatory regime governing NFTs is uncertain, and new regulations or policies may materially adversely affect the utility of NFTs; and (iv) there are risks associated with purchasing items associated with content created by third parties through peer-to-peer transactions, including but not limited to, the risk of purchasing counterfeit items, mislabeled items, items that are vulnerable to metadata decay, items on smart contracts with bugs, and items that may become untransferable.")}
                  {t("You represent and warrant that you have done sufficient research before making any decisions to sell, buy, transfer, or otherwise interact with any NFTs. ")}
                  {t("You further acknowledge and agree it is your sole responsibility to carry out all necessary due diligence for all your activities relating to NFTs, and you represent and warrant that you have not and are not relying on, and shall have no remedies, in respect of any statement or representation made by Company and/or ROX Games (as defined in the ROX Games Terms) in relation to any sale, buy, transfer or interaction otherwise with any NFTs.")}
                  {t("Any purchase or sale you make, accept or facilitate outside of the NFT Marketplace of an NFT will be entirely at your risk. You acknowledge that you have obtained sufficient information to make an informed decision to purchase an NFT, including carefully reviewing the code of the smart contract and the NFT and fully understand and accept the functions of the same. We do not control or endorse purchases or sales of NFTs outside of the NFT Marketplace.")}
                  {t("We expressly deny and disclaim any liability to you and deny any obligation to indemnify you or hold you harmless for any losses you may incur by transacting, or facilitating transactions, in NFTs outside of the NFT Marketplace.")}
                  {t("Certain parts of the NFT Marketplace may display, include or make available content, data, information, applications or materials from third parties (“Third Party Materials”).")} 
                  {t("By using the NFT Marketplace, you acknowledge and agree that Company is not responsible for examining or evaluating the content, accuracy, completeness, availability, timeliness, validity, copyright compliance, legality, decency, quality or any other aspect of such Third Party Materials. We do not warrant or endorse and do not assume and will not have any liability or responsibility to you or any other person for any third-party services, Third Party Materials, or for any other materials, products, or services of third parties.")}
                  {t("If you have a dispute with one or more users, YOU RELEASE US FROM CLAIMS, DEMANDS, AND DAMAGES OF EVERY KIND AND NATURE, KNOWN AND UNKNOWN, ARISING OUT OF OR IN ANY WAY CONNECTED WITH SUCH DISPUTES.")}
                  {t("IN ENTERING INTO THIS RELEASE YOU EXPRESSLY WAIVE ANY PROTECTIONS (WHETHER STATUTORY OR OTHERWISE) THAT WOULD OTHERWISE LIMIT THE COVERAGE OF THIS RELEASE TO INCLUDE THOSE CLAIMS WHICH YOU MAY KNOW OR SUSPECT TO EXIST IN YOUR FAVOUR AT THE TIME OF AGREEING TO THIS RELEASE.")}
                </p>
                <h3>{t("10. Limitation of Liability")}</h3>
                <p>
                  {t("TO THE FULLEST EXTENT PERMITTED BY LAW, YOU AGREE THAT IN NO EVENT WILL COMPANY BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY LOST PROFIT OR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES RELATED TO THE LOSS OF REVENUE, LOSS OF PROFIT, LOSS OF BUSINESS OR ANTICIPATED SAVING, LOSS OF USE, LOSS OF GOODWILL OR LOSS OF DATA, WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF PARTIES HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES; AND (B) FOR ANY OTHER CLAIM, DEMAND, OR DAMAGES WHATSOEVER RESULTING FROM OR ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OF THE DELIVERY, USE, OR PERFORMANCE OF THE SERVICE.")}
                  {t("ACCESS TO, AND USE OF, THE SERVICE, PRODUCTS OR THIRD-PARTY SITES, AND PRODUCTS ARE AT YOUR OWN DISCRETION AND RISK, AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR MOBILE DEVICE OR LOSS OF DATA RESULTING THEREFROM. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, IN NO EVENT SHALL THE MAXIMUM AGGREGATE LIABILITY OF COMPANY ARISING OUT OF OR IN ANY WAY RELATED TO THESE TERMS, THE ACCESS TO AND USE OF THE SERVICE, CONTENT, OR NFTS EXCEED $100.")}
                </p>

                <h3>{t("11. Termination")}</h3>
                <p>
                  {t("If you breach any of the provisions of these NFT Terms, we reserve the right, with or without notice and in our sole discretion, to suspend, disable, terminate, or delete your account and/or your ability to access or use the NFT Marketplace (or any part of the foregoing) at any time and for any or no reason, and you acknowledge and agree that we shall have no liability or obligation to you in such event and that you will not be entitled to a refund of any amounts that youhave already paid to us.")}
                </p>
                <h3>{t("12. Contact")}</h3>
                <p>
                  {t("General questions or comments about the NFT Marketplace or these NFT Terms should be sent either by mail to Hash Muse Pte Ltd, 531A Upper Cross Street, #04-95 Hong Lim Complex, Singapore, or by contacting the customer support team at https://www.ROX Games.com/en/ support/requests/new.")}
                </p>
              </div>
            </PerfectScrollbar>
            <div className="conformation">
              <div className="conformation-text">
                <p>
                  {t("Please read and accept Terms and Conditions before proceeding")}
                </p>
              </div>
              <div className="conformation-btn-main">
                <div className="conformation-btn1">
                  <button className="conformation-btn" onClick={handleButton}>
                    {t("Cancel")}
                  </button>
                </div>
                <div>
                  <button
                    className="conformation-btn"
                    onClick={() => {
                      setCookie("Market_Terms_Service", true);
                      setInfo(false);
                    }}
                  >
                    {t("Accept Terms")}
                  </button>
                </div>
              </div>
            </div>

            {/* <button
              onClick={() => {
                setCookie("Terms_Service", true);
                setInfo(false);
              }}
            >
              Accept Terms
            </button> */}
          </div>
        </div>
      )}

      <style jsx>
        {`
          .warning-area {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 9999;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #000000b5;
            backdrop-filter: blur(30px);
          }
          .warning-info {
            background: var(--bigCtaBg);
            padding: 50px;
            border-radius: 10px;
            max-width: 1200px;
            position: relative;
            margin: 30px;
          }
          .warning-info button {
            margin-top: 0px !important;
          }
          .warning-info-content {
            max-height: 400px;
          }

          .warning-info-content h3 {
            font-size: 14px;
            font-weight: 600;
            margin: 10px 0;
          }

          .warning-info-content p {
            margin: 20px 0;
          }

          .warning-info span {
            position: absolute;
            right: 20px;
            top: 20px;
            cursor: pointer;
          }

          .warning-info span svg {
            width: 30px;
            height: 30px;
          }

          .warning-info h2 {
            font-size: 26px;
            font-weight: 500;
            margin-bottom: 30px;
          }

          .warning-info button {
            background: linear-gradient(90deg, #f0b90b, #8a6900);
            border: none;
            padding: 15px 30px;
            color: #fff;
            font-size: 14px;
            border-radius: 10px;
            margin-top: 30px;
            cursor: pointer;
          }
          .warning-info button:hover {
            filter: brightness(1.15);
          }
          .conformation {
            display: flex;
            justify-content: space-between;
            margin-top: 30px;
          }
          .conformation-text {
            display: flex;
            align-items: center;
          }
          .conformation-btn-main {
            display: flex;
          }
          .conformation-btn1 {
            margin-right: 40px;
          }
          .conformation-btn1 button {
            background: linear-gradient(90deg, #e4e4e4, #a9a9a9) !important;
            color: #000 !important;
          }
          .conformation-btn {
            border-radius: 4px !important;
            width:186px !important;
            padding: 12px 30px !important;
          }
        `}
      </style>
    </div>
  );
}

export default MarketplaceTerms;
