import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  constructor(
    private http: HttpClient
  ) { }

  loginAdmin(adminlogin){
    return this.http.post('http://localhost:8084/admin/login', adminlogin);
  }

  getFeedback(): Observable<any>{
    return this.http.get('http://localhost:8084/admin/feedback')
  }

  addVehicle(vehicle): Observable<any>{
    return this.http.post('http://localhost:8084/admin/vehicle/add',vehicle)
  }

  getUser(): Observable<any>{
    return this.http.get('http://localhost:8084/admin/users');
  }

  getVendors(): Observable<any>{
    return this.http.get('http://localhost:8084/admin/vendors');
  }

  addVendor(vendor):Observable<any>{
    return this.http.post('http://localhost:8084/admin/vendor/add',vendor);
  }

  updateVendor(vendorId, vendor): Observable<any>{
    return this.http.put(`http://localhost:8084/admin/vendor/${vendorId}`,vendor);

  }

  deleteVendor(vendorId){
    return this.http.delete(`http://localhost:8084/admin/vendor/${vendorId}`);
  }

  getVendor(vendorId): Observable<any>{
    return this.http.get(`http://localhost:8084/admin/vendor/${vendorId}`);
  }
}
