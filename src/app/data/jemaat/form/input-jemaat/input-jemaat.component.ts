import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {JemaatModel} from '../../../../dto/JemaatModel';
import {JemaatService} from '../../../../services/jemaat.service';
declare var $: any;
declare var md: any;

@Component({
  selector: 'app-input-jemaat',
  templateUrl: './input-jemaat.component.html',
  styleUrls: ['./input-jemaat.component.css']
})
export class InputJemaatComponent implements OnInit {

  inputJemaatForm = new FormGroup({
    namaJemaat: new FormControl(''),
    nomorKTP: new FormControl(''),
    alamatJemaat: new FormControl(''),
    kodePost: new FormControl(''),
    nomorTelp: new FormControl(''),
    tanggalLahir: new FormControl(''),
    email: new FormControl(''),
    statusJemaat: new FormControl(''),
    statusKeanggotaan: new FormControl('')
});

  constructor(private jemaatService: JemaatService) { }

  ngOnInit() {
    function setFormValidation(id) {
      $(id).validate({
        highlight: element => {
          $(element).closest('.form-group').removeClass('has-success').addClass('has-danger');
          $(element).closest('.form-check').removeClass('has-success').addClass('has-danger');
        },
        success: element => {
          $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
          $(element).closest('.form-check').removeClass('has-danger').addClass('has-success');
        },
        errorPlacement: (error, element) => {
          $(element).closest('.form-group').append(error);
        },
      });
    }

    $(document).ready(() => {
      setFormValidation('#TypeValidation');
      md.initFormExtendedDatetimepickers();
      if ($('.slider').length !== 0) {
        md.initSliders();
      }
    });
  }

  simpanInformasiJemaat() {
    const stringTglLahir: string = this.inputJemaatForm.get('tanggalLahir').value;
    console.log('String tgl Lahir ' + stringTglLahir);
    const dateOfBirth: Date = new Date(stringTglLahir);
    const dataJemaat: JemaatModel = {
      namaJemaat: this.inputJemaatForm.get('namaJemaat').value,
      nomorKTP: this.inputJemaatForm.get('nomorKTP').value,
      alamatJemaat: this.inputJemaatForm.get('alamatJemaat').value,
      kodepost: this.inputJemaatForm.get('kodePost').value,
      nomorTelp: this.inputJemaatForm.get('nomorTelp').value,
      tanggalLahir: dateOfBirth,
      email: this.inputJemaatForm.get('email').value,
      statusJemaat: this.inputJemaatForm.get('statusJemaat').value,
      statusKeanggotaan: this.inputJemaatForm.get('statusKeanggotaan').value } as JemaatModel;
    console.log('Jemaat DTO Information Tanggal Lahir ' + dataJemaat.tanggalLahir);
    console.log('Jemaat DTO Information Tanggal Lahir Form ' + this.inputJemaatForm.get('tanggalLahir').value);
    console.log('Jemaat DTO Information Email ' + dataJemaat.email);
    console.log('Jemaat DTO Information Status Jemaat' + dataJemaat.statusJemaat);
    console.log('Jemaat DTO Information Status Keanggotaan' + dataJemaat.statusKeanggotaan);
    this.jemaatService.insertJemaat(dataJemaat).subscribe(
      (dataResponse) => console.log(dataResponse),
      (error) => console.log(error));
  }
}
