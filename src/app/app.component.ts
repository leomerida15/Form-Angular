import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

class body {
  constructor(
    public name: string,
    public base: string,
    public obj: { a: string; b: { c: string }[] }
  ) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'HTTP';

  loginForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    zone: ['', Validators.required],
  });

  constructor(private _servicio: HttpService, private fb: FormBuilder) {}

  async envio(body: any) {
    try {
      console.log(body);

      const form: any = new FormData();

      form.append('data', JSON.stringify(body));

      // debugger;

      const resp = await this._servicio.createZone(form).toPromise();

      // debugger;

      console.log('resp');
      console.log(resp);
    } catch (err) {
      console.error(err);
    }
  }
}
