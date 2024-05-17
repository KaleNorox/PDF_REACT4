import { jsPDF } from 'jspdf';
import JsBarcode from 'jsbarcode';
import qrcode from 'qrcode';

//librerias 
//npm install qrcode
//npm npm i jsbarcode
//npm i jspdf


function Pdf() {
    var o1 = Math.floor(Math.random() * 9) + 1
   
    var ruc = Math.floor(Math.random() * 900000000) + 100000000
    var ruc2 = Math.floor(Math.random() * 200000000) + 100000000
    var mr = Math.floor(Math.random() * 9000000000) + 1000000000
    var o = Math.floor(Math.random() * 900000) + 100000
    var d = Math.floor(Math.random() * 9000000) + 1000000

    var f=new Date();
    var dd=f.getDate();
    var m=f.getMonth();
    var y=f.getFullYear();

    var h=f.getHours();
    var mm=f.getMinutes();
    var amp='';
    if(h>12){
        amp='pm';
    }else{
        amp='am';
    }

    if(mm<10){
       mm='0'+mm 
    }


    const empresa = {
        dir: 'Av.Primavera MZA. H Lote . 106d AV.los Gramadales',
        web: 'www.logistikmr.com',
        tel: '(' + 51 + ') ' + 976037013,
        bar: `*MR${mr}*`,
        or: `Orden Servicio: C${o1}-${o}`,
        em: 'Nombre:  Banco Agropecuario',
        dir1: 'Direccion: Av.Republica de Panama 3531 Dpto 901',
        tel1: 'Teléfono : ' + 997251923,
        e: 'Correo: scanales@agrobanco.com.pe',
        ru_dni: `RUC/DNI:  ${ruc2}`
    }

    const cliente = {
        cli: 'Nombre:  David Marlon Berrocal Gutierrez',
        dir: 'Direcccion: Av.Primavera MZA.H Lote.106d AV.los Gramadales',
        tel: 'Teléfono: ' + 997251923,
        ru_dni: `RUC/DNI: ${d}`,
        des: 'Destino: Moyobamba',
        pro: 'Provincia: Moyobamba',
        fe_ho:`Fecha: ${dd}-${m}-${y} ${h}:${mm} ${amp}`

    }


    const link = `https://music.youtube.com/watch?v=qDAoJIJ2ljU&si=GzaV4ymVjPesIf6_`

    const printPdf = () => {
        const doc = new jsPDF({
            unit: 'cm',
            format: [21, 9.9],
            orientation: 'landscape'
        });

        doc.addImage("/LogoMR.png", "PNG", 1, 0.5, 3.5, 0.8);
        doc.addImage("/logo2.png", "PNG", 12, 0.59, 2.89, 0.5);
        doc.setFontSize(6)
        doc.text(`${cliente.fe_ho}`, 12.1,1.5)
        doc.setFontSize(8)
        doc.setFont("calibri")
        doc.text(`RUC:${ruc}`, 9.7, 0.7);
        doc.text(`${empresa.dir}`, 5.4, 1);
        doc.text(`${empresa.web}`, 9.3, 1.3);
        doc.text(`Servicio al cliente: ${empresa.tel}`, 7.7, 1.6);
        //cuadros remitente
        doc.setLineWidth(0.02);
        doc.setFontSize(9)
        
        doc.text(`${empresa.or}`, 0.9, 2.3);
        doc.rect(0.8, 2, 10.86, 0.5);
        doc.text(`${empresa.em}`, 1.48, 2.8);
        doc.text(`${empresa.ru_dni}`, 7.8, 2.8);
        doc.text(`${empresa.dir1}`, 1.48, 3.5);
        doc.text(`${empresa.tel1}`, 1.48, 4.2);
        doc.text(`${empresa.e}`, 1.48, 5);
        doc.rect(1.41, 2.5, 10.25, 3);
        doc.text('REMITENTE',1.2,5,null,90)
        doc.rect(0.8, 2.5, 0.6, 3);
        doc.setFontSize(7.5)
        doc.text(`Causal de devolución`, 1.5, 5.8);
        doc.rect(0.8, 5.5, 3.8, 0.4);
        doc.addImage("/logo3.png", "PNG", 9.3, 3.95, 1.5, 1.2);
        doc.setFontSize(8)
        doc.text('  1       2       3', 0.9, 6.4);

        //cuadros destino
        doc.setLineWidth(0.02);
        doc.addImage("/logo4.png", "PNG", 12.75, 2, 1, 1);
        doc.rect(12.45, 2, 1.5, 1);
        doc.text(`${cliente.des}`, 14.4, 2.35);
        doc.rect(13.95, 2, 6.3, 0.5);
        doc.text(`${cliente.pro}`, 14.4, 2.85);
        doc.rect(13.95, 2.5, 6.3, 0.5);
        doc.text(`${cliente.cli}`, 12.75, 3.5);
        doc.setFontSize(7)
        doc.text(`${cliente.dir}`, 12.75, 4.35);
        doc.setFontSize(8)
        doc.text(`${cliente.tel}`, 12.75, 5.1);
        doc.text(`${cliente.ru_dni}`, 12.75, 5.8);
        doc.rect(12.45, 3, 7.8, 3.1);
        doc.text('DESTINATARIO',12.2,5.2,null,90)
        doc.rect(11.8, 2, 0.65, 4.1);
        doc.setFontSize(6.5);
        doc.text(`Caracteristicas fisicas de envio`, 12, 6.45);
        doc.rect(11.8, 6.1, 3.2, 0.5);
        doc.setFontSize(8);
        doc.text(`Contenido de mercancia`, 16.8, 6.45);
        doc.rect(16, 6.1, 4.25, 0.5);
        doc.text(`Caja de utiles escolares`, 16.8, 7.2);
        doc.rect(16, 6.6, 4.25, 1);

        doc.text(`Cantidad:     5`, 11.98, 7);
        doc.text(`Peso(Kg):    10,5`, 11.98, 7.4);
        doc.text(`Peso(Vol):   0,15`, 11.98, 7.8);

        //firma izquierda
        doc.line(0.8, 9, 6.15, 9);


        //cuadrados tiempo
        doc.rect(6.4, 8.5, 1.2, 0.5);
        doc.rect(7.6, 8.5, 1.2, 0.5);
        doc.rect(8.8, 8.5, 1.2, 0.5);
        doc.rect(10, 8.5, 1.2, 0.5);
        doc.setFontSize(8)
        doc.text('Dia', 6.8, 8.85);
        doc.text('Mes', 8, 8.85);
        doc.text('Año', 9.2, 8.85);
        doc.text('Hora', 10.4, 8.85);
        //linea derecha
        doc.setLineWidth(0.01);
        doc.setLineDash([0.25]);
        doc.line(11.2, 8.4, 20, 8.4);

        qrcode.toDataURL(`${link}`, function (err, url) {
            if (err) return console.error(err);
            doc.addImage(url, 'PNG', 8, 5.55, 1.8, 1.8);
        });

        const canvas = document.createElement('canvas');
        const canvas2 = document.createElement('canvas');
        JsBarcode(canvas, empresa.bar, {
            format: "CODE128",
            displayValue: true,
            fontSize: 20,
            margin: 10
        });
        JsBarcode(canvas2, empresa.bar, {
            format: "CODE128",
            displayValue: true,
            fontSize: 20,
            textAlign: 'right'
        });
        const barcodeImage = canvas.toDataURL('image/png');
        const barcodeImage2 = canvas2.toDataURL('image/png');
        doc.addImage(barcodeImage, 'PNG', 6.3, 7.2, 5, 1.3);
        doc.addImage(barcodeImage2, 'PNG', 15, 0.5, 5.2, 1.2);
        doc.setFontSize(6)
        doc.text('CODIGO DE ',15.5,1.65);
        doc.text('TRACKING N° ',15.4,1.85);
        




        //causal de devolucion
        doc.setLineWidth(0.01);
        doc.setLineDash([0.45]);
        doc.setFontSize(7)
        doc.line(0.8, 6.9, 3, 6.9);
        doc.line(0.8, 7.3, 3, 7.3);
        doc.line(0.8, 7.7, 3, 7.7);
        doc.line(0.8, 8.1, 3, 8.1);
        doc.text(' Direccion incorrecta', 3.5, 6.9);
        doc.text(' Telefono apagado', 3.5, 7.3);
        doc.text(' Zona no accesible', 3.5, 7.7);
        doc.text(' Cliente de viaje', 3.5, 8.1);
        doc.setFontSize(7)
        doc.text('Recepcion de envio, nombre,firma,sello', 1.5, 9.3)



        doc.save(`reporte_${cliente.ru_dni}.pdf`);
        doc.output('dataurlnewwindow');
    }
    return (
        <div>
            <center>
                <button onClick={printPdf}>imprimir</button>
            </center>

        </div>

    )
}
export default Pdf;
