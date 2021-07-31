import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Contexto } from "../Context";
import CreacionNote from "./CreacionNote";
import Modal from "./Modal";
import Nota from "./Nota";

function Inicio() {
  const [Data, setData] = useState([]);
  const [Img, setImg] = useState([
    "https://lh3.googleusercontent.com/jnpri_E5dNWQSfQi7A-m1FM9u1GRFUhjlY9vUxfd9MXcbrtz19XL_Lg1-JoMFvsW9q3PId_z-UNv2JR66SilU-GB5pdUD-nmVYQZD9N6djyzEFX5O1QaSquDVHO2rdpZJts6Ahabt7SJEU_E6o-CggQ2om3xEj5MlpMw1McanJGu0VRLtUHEwhwiTI3y7sxMEJddZCbbs67i_eT-4MPILrJtqvGEmqfihVeGfW87EMSntbCXT3WE8Tqnx5PsjtdgNuyyRwwdqOUTvlB94hxb-a46nJ9_4PY-cHPin_-dEwJLYsBIzTxCpQP6il7wsG8dpaBixtimbJC4nvQlN8WtjYdEzTo0H2Oc_T9wWaTnTN8Wy8yIiKeZgl72YUGJq4_PnBff1mwdN07ond2feWF_pjTELZxhR2JwDn3PGWT9bwXSjWzzl09WJ1fE57dF7yGIXSqo0H9Y8PuN0VogMklbNVrEoVE2uSykT36XKQtqBabdgq6np_YNgE5kCGfhFOctwbH79tBl2SvHD8dkAoslwwJK3Lp9DLnuHkdR8m9crtXOyqqlJ6b9QktEd5YWQxs-ETBeCAatqXW8Ml2frPIM-fdc4X2q7f0KVqacPKcBk5AVsm1aao8EN9x1o3je_2zS2acW1T-fB0tEIOAMwS1gzDWJb2Ez5E9Eiv2brDS_MsWVF00xDCKMxNZ3W5g6rJMmNjJY71orbYZx4q_3-Zfk02k=w321-h659-no?authuser=0",

    "https://lh3.googleusercontent.com/O5g5hZrM1Hhr11o6hM8suo989PmJvZtuOejPsUd0duO7zVhwldmFd0UZpb1vV8UbeeT8RT0orxwoZlG29Q4Ot8Ie7C5aT7bbLj-kly8h9__1Jc5Qz12EQPcWwEbEOh09hEPUHdi2IwbiF3WRIwTuwDUy1bVTZsup0xiQ9HAY2lg4XB6mSWWZtfhLJQlamsEj46Bxe-oDo6uTCl8fjPVmWXnM1J7s32OjyLSjw0JyjlIPrSHwQWgEVi2xR5_ylZ2ee428SUd_LPDtYkvrjxLxXvwQ9HqiCVXGaX7CWilyttfQ-OqwoHuu5IK4iKyoekditKw8sQU3Za2r0MeWdIrlnKnIjpZNgI3ZV45lYIOIxe7YDtUacfl96iUlGlypg_DrMeDZsUGy6a5RiI5AoSy3uRRkaZSMIoQx9en17qIgUSsGb9spUSwzpLsmJgRz_8NYDGTvX8VRMtGBD2llivFOm4aBLtnhThWXPod9EMIArjmQsUX9qdu93085P7ov5IsenjXvBYgf12gV-IYBhf5qlwJGE_nyYV8k8qjIGI_AOcdYMHi5ymTa6iOgbhYASOXRCjOS1UmfmKKqb_rrObrpjxWSl3vfhgjxmKc62aPY2-XEm2UNw_k3CrT0FczuBA7kiyvbrE_DIVC0xJAGGOlbs4sFbALkkb7WwOg3OXrE6fVQhdTj1i-pG-iIDLnCtgIxy0VMCq9UavGDBfv4t4Ayua4=w321-h659-no?authuser=0",

    "https://lh3.googleusercontent.com/Dsew-pR-cf-XYVJLBl33U-V2LOK3p1HMpY_kLyFRBRLjSYw0-u84uOzwfcFxUTp4FoagGeqGsxUmYvXMWyJi2gGdnb3B5axAL5PIT7NTzgWqEWWQJFAO7bDdNUU8C8l3f_ClQIJaqnL6W5RBrBni6MG5hhP3Sry-X1D5bVXXA6SNv4Tl8eOkZwrRmgs1DeJD9rdd92s7dK2xkPk2b05QzCGAV9GpIY75tLhraSQQtTT09j6dcucdQOtUpLG_pBc6VqSxvm8GYv0ekhcn0M5tzVGjSaQpjXMQIWrkf1qBjDWvNPporGJDWmEQWqQArA7o-DKg4pbX2vLF3i7SsFtgxfEUHRa7ChmlXj2NlLDb7i5Kze3mAiAfQ_d5PqeCmHO5HPt3IPYEd2wc3_tqMpeSKjRDYOPwQX9_60GAs3dBNjqkTeiDUSSX1Ms1NZxDYtAHNC_HqCHbQMoYwvHncag2Icm_Bkb_7MIqMFs3zUvFzWCG4ZF9GU6_iIbgLtJuVcblbjnICmkrFJfAmlZ1A8u5cJYtbdhTRpOjgSxrAOurXf-27Qw2Um-lYHXVce8QM8J2mQ5bRXPILPqve5IAwDfMD6KqoAbpjRLOg-g-WHUPuap4Yr8No1Xk0A7focrL990-ujbKuP-wv9-rjRlHyH-ZVR9-tVAQHwHF604CyXhcEa3o9lqDAtNCaRcQc9btMUQ5hPS14FURo4Y4VJ-WdexzvqM=w321-h659-no?authuser=0",

    "https://lh3.googleusercontent.com/4CQvliW4rGxgFWzzIqVDCRSVpqufkdinj-DAsHH_fRf8ySF0Q386iXvMaVbaxhJQI_lNybFbtk4KGp0FGPMPkdtAO7M4NdjiHJklNfIV0EhpslVrPsa75eFXG9_TVN25vINQP7otqWPleupfim_cJcg0zz17KNPklyU197PTaZJp_UEWbL-_zG2Di-VIONZggQ5tdfbc9mMN_RPFYcMmJ2z4bEOdVWWVSHL1touhm8zTM0dyVeZoTbh-F_CJagE3o7LeGUEcS0f6Jop4XKHfAswdL-1jLSbR4qXzZRPp_fMz8-XihV4EMjRXBe_WsN6wEErWXHXcDaI2vKbMpHjEsK-xPMJMIphN6gdQpyQmCmZMytNE40tzA5QqKyJTXkBQvb6cJ_wM1v9jQ5yjjGp3nIm23tvG5KS_0hZztHPC-p4XQCzG3AAcE7z-GzSurTHX3q_doCjGG19aDmaImIXgxGxXhcAOPOL7cmvOAMN4mIFMBQVjuFVl4dV08IYy6ama5EQrnn8kXdbikHY3XNi7u-ecZYlFDTShjjeooIJuV8hXI5Svqpuhf8rGWCCz3GmGZy8B9wHjqMOfJSn3hr6KdcG-o6zhZ7cA_Wm9B40-bJRYhmE9IrAyT6flBHGU4Hi0t3lTNXWdiwh3qUAVJXTK8VqVjjJQyUytPK45p-3MYSNci7gikiZfYY2XxZ4TxgjsCNGEEcyXCdvrH9UZWFBvZbw=w321-h659-no?authuser=0",

    "https://lh3.googleusercontent.com/9GkjilsxlbHU0sHppNIKCNrbjSi9jyMm3eAdGuteYvqSAKr9lxRIfDGo20ewQPNijRKX-dHteUJ_Z_f7VKRVJ1MGLyx6W7qd6wIYFmyfjnqHob8TZuI9sNRDgi4I6sbD41ih98viCB85Le_nvUjI-J2LlPPLv9FHzbaD8q3bo38fr-uEjEIRv4U4zQFxn1sKBi5P_ZXwHO1fgmBRUnNyRS4B-M9xLmtSqTIF0r8oPuIoXSsT4L8JHX4U7APvLS2XhtkoG7fdzQOVez-lyqZOlgxIwMDo0maFHbvJhLyxo1WPC4IHzA1JXmEsBa_Gkahy3aNRw_SbfnFQQQQCpPlO7YM_uvgfUqT7K-SJW8YvHCePUmVj2-kGtILZLTk_kxVS_YKqACQuLEiEYGIDSlrZo2SpmG-Pb7oZri_oQjeN1vD4oriXzzQitxx_evabnMixmzvjobUXWfCYQIn3_iYS1-8hRrUPegHFHq2UXovZkn1iTZ0a7HT8CPr5wcON2OIwKyKXDWCItMe-XowjgT3xaMd8OCcuhaVPUtVaO7MQSbjWiwv-Tx50Nh9zgp2LWKquob7Bpt8tA1-be7BhfobgukMW41y4Dfqc7NAR-AyuZjSBaAOQxTPH6xGbZ6QlJwXTxuC9NyY3ZMLu5N-njngnwBw1xP5woKnsOJXvFQFN21KrP4jlMiJk7v9awPPcxUQJKxWbZMGeODCoO1Z6D5NV4WA=w321-h659-no?authuser=0",

    "https://lh3.googleusercontent.com/9GkjilsxlbHU0sHppNIKCNrbjSi9jyMm3eAdGuteYvqSAKr9lxRIfDGo20ewQPNijRKX-dHteUJ_Z_f7VKRVJ1MGLyx6W7qd6wIYFmyfjnqHob8TZuI9sNRDgi4I6sbD41ih98viCB85Le_nvUjI-J2LlPPLv9FHzbaD8q3bo38fr-uEjEIRv4U4zQFxn1sKBi5P_ZXwHO1fgmBRUnNyRS4B-M9xLmtSqTIF0r8oPuIoXSsT4L8JHX4U7APvLS2XhtkoG7fdzQOVez-lyqZOlgxIwMDo0maFHbvJhLyxo1WPC4IHzA1JXmEsBa_Gkahy3aNRw_SbfnFQQQQCpPlO7YM_uvgfUqT7K-SJW8YvHCePUmVj2-kGtILZLTk_kxVS_YKqACQuLEiEYGIDSlrZo2SpmG-Pb7oZri_oQjeN1vD4oriXzzQitxx_evabnMixmzvjobUXWfCYQIn3_iYS1-8hRrUPegHFHq2UXovZkn1iTZ0a7HT8CPr5wcON2OIwKyKXDWCItMe-XowjgT3xaMd8OCcuhaVPUtVaO7MQSbjWiwv-Tx50Nh9zgp2LWKquob7Bpt8tA1-be7BhfobgukMW41y4Dfqc7NAR-AyuZjSBaAOQxTPH6xGbZ6QlJwXTxuC9NyY3ZMLu5N-njngnwBw1xP5woKnsOJXvFQFN21KrP4jlMiJk7v9awPPcxUQJKxWbZMGeODCoO1Z6D5NV4WA=w321-h659-no?authuser=0",

    "https://lh3.googleusercontent.com/9GkjilsxlbHU0sHppNIKCNrbjSi9jyMm3eAdGuteYvqSAKr9lxRIfDGo20ewQPNijRKX-dHteUJ_Z_f7VKRVJ1MGLyx6W7qd6wIYFmyfjnqHob8TZuI9sNRDgi4I6sbD41ih98viCB85Le_nvUjI-J2LlPPLv9FHzbaD8q3bo38fr-uEjEIRv4U4zQFxn1sKBi5P_ZXwHO1fgmBRUnNyRS4B-M9xLmtSqTIF0r8oPuIoXSsT4L8JHX4U7APvLS2XhtkoG7fdzQOVez-lyqZOlgxIwMDo0maFHbvJhLyxo1WPC4IHzA1JXmEsBa_Gkahy3aNRw_SbfnFQQQQCpPlO7YM_uvgfUqT7K-SJW8YvHCePUmVj2-kGtILZLTk_kxVS_YKqACQuLEiEYGIDSlrZo2SpmG-Pb7oZri_oQjeN1vD4oriXzzQitxx_evabnMixmzvjobUXWfCYQIn3_iYS1-8hRrUPegHFHq2UXovZkn1iTZ0a7HT8CPr5wcON2OIwKyKXDWCItMe-XowjgT3xaMd8OCcuhaVPUtVaO7MQSbjWiwv-Tx50Nh9zgp2LWKquob7Bpt8tA1-be7BhfobgukMW41y4Dfqc7NAR-AyuZjSBaAOQxTPH6xGbZ6QlJwXTxuC9NyY3ZMLu5N-njngnwBw1xP5woKnsOJXvFQFN21KrP4jlMiJk7v9awPPcxUQJKxWbZMGeODCoO1Z6D5NV4WA=w321-h659-no?authuser=0",
  ]);
  const { Conf, setConf } = useContext(Contexto);
  useEffect(() => {
    cambiar();
    obtener();
  }, []);

  const cambiar = () => {
    setTimeout(() => {
      Img.forEach((element) => {
        console.log(element);
        console.log("paso4seg");
      }, 2000);
    });
  };

  const obtener = async () => {
    await axios
      .get("http://localhost:5000/")
      .then((response) => setData(response.data));
  };

  return (
    <>
      <div className="App">
        <div className="heads">
          <h1>Notas</h1>
          <CreacionNote />
        </div>

        <div className="back-fondo">
          <img
            src="https://lh3.googleusercontent.com/9GkjilsxlbHU0sHppNIKCNrbjSi9jyMm3eAdGuteYvqSAKr9lxRIfDGo20ewQPNijRKX-dHteUJ_Z_f7VKRVJ1MGLyx6W7qd6wIYFmyfjnqHob8TZuI9sNRDgi4I6sbD41ih98viCB85Le_nvUjI-J2LlPPLv9FHzbaD8q3bo38fr-uEjEIRv4U4zQFxn1sKBi5P_ZXwHO1fgmBRUnNyRS4B-M9xLmtSqTIF0r8oPuIoXSsT4L8JHX4U7APvLS2XhtkoG7fdzQOVez-lyqZOlgxIwMDo0maFHbvJhLyxo1WPC4IHzA1JXmEsBa_Gkahy3aNRw_SbfnFQQQQCpPlO7YM_uvgfUqT7K-SJW8YvHCePUmVj2-kGtILZLTk_kxVS_YKqACQuLEiEYGIDSlrZo2SpmG-Pb7oZri_oQjeN1vD4oriXzzQitxx_evabnMixmzvjobUXWfCYQIn3_iYS1-8hRrUPegHFHq2UXovZkn1iTZ0a7HT8CPr5wcON2OIwKyKXDWCItMe-XowjgT3xaMd8OCcuhaVPUtVaO7MQSbjWiwv-Tx50Nh9zgp2LWKquob7Bpt8tA1-be7BhfobgukMW41y4Dfqc7NAR-AyuZjSBaAOQxTPH6xGbZ6QlJwXTxuC9NyY3ZMLu5N-njngnwBw1xP5woKnsOJXvFQFN21KrP4jlMiJk7v9awPPcxUQJKxWbZMGeODCoO1Z6D5NV4WA=w321-h659-no?authuser=0"
            alt=""
          />
        </div>
        {Conf && (
          <div className="position-modal" onClick={() => setConf(false)}>
            <Modal />
          </div>
        )}

        <div className="cont_contenido">
          {Data.map((res) => {
            return <Nota titulo={res.titulo} description={res.Descipcion} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Inicio;
