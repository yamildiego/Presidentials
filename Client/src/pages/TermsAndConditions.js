import React, { Component } from 'react';
import AppLayout from '../components/AppLayout';
import './styles/TermsAndConditions.css';
import Constants from '../config';

class TermsAndConditions extends Component {
    state = {}
    render() {
        return (
            <AppLayout>
                <div className="TermsAndConditions">
                    <h2 className="text-center">
                        Términos y condiciones de uso del sitio
                    </h2>
                    <p>
                        La información y datos que nos proporcione voluntariamente a través del sitio web se incluirán en una base de datos con el objetivo de elaborar estadísticas.
                    </p>
                    <p>
                        La aceptación de estos Términos y Condiciones, implica que Ud. presta su consentimiento expreso, libre e informado para la inclusión, uso y tratamiento de sus datos personales por Presidenciales.com.ar
                    </p>
                    <p>
                        Presidenciales.com.ar realizará el tratamiento de sus datos personales en un todo de acuerdo con las disposiciones de la Ley 25.326 sobre Protección de los Datos Personales y demás normas vigentes en la materia, adoptando los recaudos técnicos y organizativos necesarios en lo que respecta a la custodia, almacenamiento, conservación y confidencialidad de la información con el fin de evitar su alteración, pérdida, tratamiento o acceso no autorizado. Debido a que ninguna transmisión vía Internet puede garantizar su íntegra seguridad, Presidenciales.com.ar no puede garantizar que la información transmitida a través del sitio web se encuentra completamente segura, con lo cual Ud. asume este riesgo que declara conocer y aceptar.
                    </p>
                    <p>
                        Presidenciales.com.ar se reserva el derecho de eliminar los votos que considere fraudulentos.
                    </p>
                    <p>
                        Los usuarios tienen derecho a acceder a sus datos personales en forma gratuita a intervalos no inferiores a seis (6) meses, salvo que se acredite interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley 25.326 (Disposición 10/2008, artículo 1°, B.O. 18/09/2008), así como a solicitar que sus datos sean rectificados, actualizados o removidos de las bases de datos de Presidenciales.com.ar. A tales efectos, deberá enviar un email a {Constants.emailAdministrator}.
                    </p>
                    <p>
                        Se le hace saber que la Dirección Nacional de Protección de Datos Personales, órgano de control de la ley 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales.
                    </p>
                </div>
            </AppLayout>
        );
    }
}

export default TermsAndConditions;