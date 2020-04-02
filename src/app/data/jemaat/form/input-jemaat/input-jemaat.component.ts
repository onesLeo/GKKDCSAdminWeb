import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-input-jemaat',
  templateUrl: './input-jemaat.component.html',
  styleUrls: ['./input-jemaat.component.css']
})
export class InputJemaatComponent implements OnInit {

  constructor() { }

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
    });
  }

}
