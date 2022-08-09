import {React,useEffect} from 'react'
import facebook from '../../Images/facebook.png';
import instagram from '../../Images/instagram.png';
import twitter from '../../Images/twitter.png';
export default function Review({ setFooter1 }) {
    useEffect(() => {
        setFooter1(true);
      }, []);
    return (
        <div className='container'>
            <div className='container-Checkout'>
                <h5 className='main-text'>Order Successful!</h5>
                <hr />
            </div>
            <h3 className='guesth3'>Order Number #1700834</h3>
            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                    <div>
                        <div className="aem-Grid aem-Grid--12">
                            <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
                                <h5 className='checkout_h5'>Shipping Information</h5>
                                <p className='checkout_1'>q_farhan@gmail.com <br />+1 (555) 229-3367<br /><br /><br />Qadim Farhan <br />1098 Wapello Street<br />Altadena, California 91001 <br /><p>United States</p></p>

                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
                                <h5 className='checkout_h5'>Shipping Method</h5>
                                <p className='checkout_1'>Standard Shipping<br /> Est. delivery in 4 - 8 business days <br />FREE</p>
                                <h5 className='checkout_h5'>Payment Information</h5>
                                <p className='checkout_1'>Credit Card <br /> Visa ending in 4567</p>

                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12"></div>
                        <div className="aem-Grid aem-Grid--12">
                            <div className="aem-GridColumn aem-GridColumn--default--12 ">
                                <div className="card-success">
                                    <h3>Give us a follow<br/> to SAVE 20%<br/> on your next order.</h3>
                                    <div className="social-media-icons">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAABHNCSVQICAgIfAhkiAAABGdJREFUaEPtWj1oFEEUzgliZ7QUQU8sLBRMFEwlOTu1MUFFEEwuki6F2thY5AQbbUwaG4m5aCOoGBG0NNFCrEzQUuFSqGhlFARtzu87ZsO7cWbv3d3uZRZv4HG78/t97715M7M3uR6RqtXqDrxOQI5D9kA2yvIAn78A00vIXC6Xey7x5aIXkBrH860MkPHpdxbkzkeFNWKG1O0ALdIspEcgd4qNcsb9PmTYUjb5SyA3RWLXUXLZKuU8u4cKP5tVWafqAze97TDkBmRAjLsC3HkSe4fMfaJgAgWca5lIwL8dQD9CNgnAAyT2x3LDzSFbyqVtcHiA/NrcMuksiVVlZZBai5SZMBlAgsIcfkYE3tGgiQHwFoAdhQxBvkOmofcFW+FZJFY2xCQXkrsoMzJFDGALAP/CMx22ghwtWEtZI1YC5kkPsSPSJbNGjO52M0hi0GQewHZC+iAMBEx0oUVofMkDOnIv1mcdtpdpGW3Z31rqmMUwUBGjMpoVYsBXUDYP4c7cSRL9kADrROQW8Twk5xf7T52YATKLseo0GmcZUzaF36s24Kid6bcnRgHprWMYPG5OKLjV3G6skYu6OkrNYui4bFzPHncFGQQsXS1Pd4L0OkBy/g27FuE4zaRCzGMpEioBIAk7k3GvEgpPWBUqeO/3uWVHLGai3lsMFkU8jrsMKWiBoQ9ajwqQFpxH++E4K8myxC2GDuli+8UgtFSfllTUzrPL4HzzWjw1YsaVaC2Z6nYEWo2zHvpjZLwg2iyBWL+mj0Qt5gDC9aioAeKrgz4ZPKRL7kKfnHOxKWliHFDuChjNuJi2nACQ7WUwUbljYsQcbrgKUjKAtETO7Fi4wEfpCfplcOmMxRyTvW03NPOsgF95VOGeknnrRozboVIjAI3KHQrrEoPS2v/m4ZhjqrkQvMXMfLCjoio0x5FzLCG1r7oKhSS3u3eAaHueOXYyKmUlFu6NxRiGHwttcnHlziP2ZOzTvmMz/c9JOaZtchbzuCPds6mduemHB1N7e6ZyQ9M+cWL2usNxmjowmt09F+W6EwIsrz6FJ+qKkVugU65f9mcyuiXPY9Mx7pNHGb9C2TuLVeTxhEDrq1IqxIwrLOB30IGC1mMZhYD5PwEJFSEFD+qm95xpEqMb0XLy2KHStqhE4sVWNtKpEYvAeU7DGoLOz2qahsZjkg0eroHN5wK6GueOPF27qpNQWXtS9hFN3WL2wIYkCTLCcW5VjDC48LsG39tOHSfWNmJlB11iSkUFU61rsWBMoQTyf1sMStqAMFx3RUKpuHWrBovdxeDnBIARXof4jIxtInMQxHhVLjMJHN4D7F4B+CiJ3UfGGZH5Bs8nQe5TFpgB/zXgvGJh7SWxY8h8ZhX8xvtTyK+AyfEG0QHLUoQ7A6OMR/cV7yBjLGASWmhfUfEgvU3eMH1IF9T2EGA9kjoNUq+Ire5CmPmgwv+S7SsIAfKogzSDt0kZF5w33UDwECruhoR82ZlL0jfIaxD6YWv+Lxzm2WR6tx3cAAAAAElFTkSuQmCC"  />
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAA1CAYAAAC5mTBpAAAABHNCSVQICAgIfAhkiAAAAl5JREFUWEftmN1VwzAMhckEwASkG8AEtBMAE5BOAJ2AMAEwAWWDbkA7Ae0ElAloJwj3Frt1HCWR05+HnvicvCSWPkuyZMXRyZYjy7IYKm7w3BpVXYXKEeYMIsVEcQqghDzh0cAkHc3gAL9A22PThRu55yDLAT2D4Ceeyy3BFNfDa8AzKGMc53imURRN/cVBPjVhsp+C4LTYj+8S71LAXus80RguCJI1wZMATGtrRyO4SaVvT/sM0KC4N4UPAb734FdSXKvMbwr/hVLu8s1GiSJuHnEAQo+cCh8Thimnp2a1XXznRrNjCYvdhaw/mKLzjhdx7Qb4n1C92wVXTQDngnLDWPulhNpptXCm0IOj9A3wQmUDnDnO+h4y7iorHJSOoe3a0dgHfChYnnnvmIZlY4EPI+oJhfcgxAX5bs/BMUdVtlu4GB8h5kfkdqENcr3AauUWFZXlkClsSs+1TNlRFJijWrgm3weE+zlaJSgeKIE6NhUuQPAHroqllQV6z6roS5b3JIBUXNx5pr6Lh46Z5x5QfNUpwLXVSRNUO8eceC585cVDwVMshD2+HR+AJ4eCM/UKB9Sh4H5Gddh47h1eFm/6X5vnc8xlVRL7cwASE1MxFb3NuYp3CNzKn0OQzUBuAM7WWgOm3LohoeW06kKZOrsor6t4W8vpglS5gG3ghV+rtpMRQ37cnUzVLm8td7yjSjXtsdymWptq/mk1xgu3A2k3nO+h4/8/551qoZPBu67rin0VGVXDsyt4k1um0n86f+V15ZUtFi/2QoZ4XSYpqL01MpcHsZK+gMsLd+1lsn/9581iqxERvAAAAABJRU5ErkJggg=="  />
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA1CAYAAADxhu2sAAAABHNCSVQICAgIfAhkiAAABdlJREFUaEPNmouVWzUQhnEFkAriVJCkApwKoAOcCthUgKmApAKcCoAK8FaQTQV4KyBUsPyfz2jPWNbzXt2NdY7OJtZoNPPPQyPprr654vbw8PCDxNuov7L+nYl71N879T/V/1qtVl9a1BA/eP2mvlbfad6HVcvEp6aRoD9pzffqQeGSCCi/V/8ghQDmookfCqP4j35Q9KssADbpuUhunwoAs9DvZqEpy76XvO/CRPEDwJ/VbzJgvk4CoIm43N82CVd70+pmU6Rmjtbc6c8vDfP/E823BTq8gdDA2tsC3b10WucAgAHxF9qiIEh5BMXycUPZk0IS9uAHzVuYR7hMaYTMzQUA5jb/JjjuNeHtlJVKczLKozg5AJcuJjjzVkB62Snba/G+SwGQswb8h4JgeeafSPDP+v+mpnisrHgBQsob7vU7IeMT6q34b+CRAiB2/3itt5rMYrNbQuhJygdBHD88CD2Qk3zGDuAbOe2QAwD3r20/s0HIWP9FbitrRRu+gYflCZK5b4/WvwAgIxRxn0pQIAwQTUVIrIDWIsbZokL7KF7bVkVrdJbLCC9vTDzjlQf5LAQSiJ3QKmTpo4FwcqeeJp4It3ZzTkmph0eJVvyx/Caieac1AP6xxQDsNOL34tNWAXUBBIbPCpAWJcTv4UwQLdQyr4Um4/pJD4sBiBPgWazbloO1U4UI3rBXZyH+nW3G55MjOIvLFiUr/LG8j/17ybROzYkBQLnvHeFjtgy/WWxBV9p3GQeM5EElF2pzFXcyxgBkAe4GwC1CaOzUS2Up5IBxtE7CJM4pU0+hZe1XWQheQ1oPwDEAZ1ughCrGpXkDSWVqOXp1AExKTLZ9bs2qNY9IWflqPGASAC4s2HOJP1yc3grGxfY0JxYSIUAuQp6LFofALABi7pbt1/qdcpQeihJ+e64eSlZuZ45zlPZzE1t21sNiAEhQPrtf7AKjhFySjwDYib+vZ5oBOGhicRtcUvBRvBOHrLN6xq8Te8Begz6jD43NUQrW+AiAZkPGALA3+6NjNnnUhPia4z1ldgwAicqXqF+UnJ59TWV6106caD9LB/RKttSFCNWa376GntJ6FeqlFwBsd3+4eUUvbrkRGnpO71Wolz6RAIt5rPVO8JncaNLFR68Cc+kFQHyj9aJUY+SuxY8ShEIltKGl6lwlc/MTx+xi/MMnB8BOY/EjxdXngsQ1W3UbzwFAyYoX+GR4kCu9Wcp6c/lm7gCL7p/1AAYyV2BD3wXmKu3nS964hmm6Zaqd9w9axJfGrJktK0cq1MsrccnadI6pAbCWIByQ4mPtVYGQ8NYm6xdDIFigcBHafRPca9UW+kzsN1m/CYBCPmBo1uNIi4I1GgFA1ecvO5qt3wyAA4H7vzgcKJAICcB40pYoe1m/a7vueoyovAuQMNl3h73ulNA0WcJHHIG0u2DrAsA8gZPVXj33LsAYghyXcodM3FervpQ83QAEJolrp5j/IjuFKY/l4yNul+sHYScD0OANXcmoxVsKyk8GezIAdvHA8/ZWPdz2ej2GHqMt5sn46wisar1fArcbAAnCnSFKbwqMP2rsZtQR2godrupioGeDXKsEKYNBnHhD4ezVkoHBJy4ofmhx6RqNuTynUv+OGKbNVh5GKy2CYrgyioJw7GI1ORnngQPF9y3ELTS2x/NlSiq8Zrm9Xx8AuAStWTYn860GOCGOVByDYHX+xg2gtyOLLgCIL0FrBsLND+qcBY414tZxycGHmbh6SnHYsC7KDy20AGArxqmPoGLZKXUpcIYJYJmdpEotv86AdfpoUuvuWsHsoTslQdvSWKDlnR+r4wEAcSfBCINqs4RG9Ui4oWxJ6cAP3lidNRdp8cMICQc3pLc+bQfBEDIn6KZTehTnxRigF22lO0EsBBC93+DOEZj6YehTeU2YaiFk4QEY2wXACN8HYGm+CCchP2mrAhBLY3WDL4z8+0FNeDI5uYNQ4ZZ5cRevCdQNQI6heco6NX4Niubk/h95ZJaBPn5hPQAAAABJRU5ErkJggg=="  />
                                    
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className='pay1'>
                <p>3. items in your order</p>
            </div>
            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">

                    <div className='order'>
                        <img src='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' className='iconDetails' />

                        <div className="text">
                            <h4>Mens Products</h4>
                            <p>Size: Medium</p>
                            <p>Color: Storm</p>
                            <p>Quantity: 2</p>
                        </div>
                    </div>
                </div >
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                <div className='order'>
                        <img src='https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg' className='iconDetails' />

                        <div className="text">
                            <h4>Womens Products</h4>
                            <p>Size: Medium</p>
                            <p>Color: Storm</p>
                            <p>Quantity: 2</p>
                        </div>
                    </div>
                </div >
                <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                    <p>You will also receive an email with the details and we will let you know when your order has shipped.</p>
               <br/>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. For assistance call Support at 1-800-867-5309, M - F, 9am - 8pm EST.</p>
                </div>
               
            </div>
            <br/>
        </div>
         
    )
}
