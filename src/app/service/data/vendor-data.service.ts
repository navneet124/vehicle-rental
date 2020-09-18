import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorDataService {

  constructor(
    private http: HttpClient
  ) { }

  loginVendor(vendorlogin){
    return this.http.post('http://localhost:8082/vendor/login', vendorlogin);
  }

  getBookingDetails(): Observable<any>{
    return this.http.get('http://localhost:8082/vendor/booking/booking_details');
  }

  getAllVehicleDetails(): Observable<any>{
    return this.http.get('http://localhost:8082/vendor/vehicles');
  }

  deleteVehicle(vehicleId){
    return this.http.delete(`http://localhost:8082/vendor/vehicle/${vehicleId}`);
  }

  updateVehicle(vehicleId, vehicle): Observable<any>{
    return this.http.put(`http://localhost:8082/vendor/vehicle/${vehicleId}`,vehicle);
  }

  getVehicle(vehicleId): Observable<any>{
    return this.http.get(`http://localhost:8082/vendor/vehicle/${vehicleId}`);
  }
}
