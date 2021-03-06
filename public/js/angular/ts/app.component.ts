import { Component, OnInit, Input, ElementRef, enableProdMode, AfterViewInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

declare var moment: any;
declare var $: any;
// declare var daterangepicker: any;

enableProdMode();

@Component({
  selector: 'my-table',
  templateUrl: 'js/angular/ts/app.component.html'
})

export class AppComponent {
	currentHead: number;
	isReversed: boolean;
	orderField: string;
	users : User[] = [];
	displayedCols : boolean[] = [];
	companyCode: string;
	playerPositions: string[];
	playerLevels: string[];
	playerTypes: string[];
	playerGenders: string[];
	filters: string[];
	dateFilter: string;
	fields: string[];
	timerFilters: boolean[];
	public selectedItems: User[] = [];
	selectAll: boolean;

	constructor (private userService: UserService, private elementRef: ElementRef) {
		this.companyCode = elementRef.nativeElement.getAttribute('[companycode]');
	}

	ngOnInit() {
		this.currentHead = -1;
		this.orderField = '';
		this.getUsers();
		this.playerPositions = ['', 'Center Back', 'Center Mid', 'Full Back', 'Keeper', 'Striker', 'Winger'];
		this.playerLevels = ['', 'Amateur', 'Pro', 'School/Uni', 'Semi Pro'];
		this.playerTypes = ['', 'New', 'Returning'];
		this.playerGenders = ['', 'Male', 'Female'];
		this.filters = ['', '', '', '', ''];
		this.dateFilter = '';
		this.timerFilters = [true, true, true];
		this.fields = ['preferredPosition', 'backupPosition', 'level', 'type', 'gender'];
	}

	ngAfterViewInit() {
		var that = this;
		$('input[name="daterange"]').daterangepicker(
		{
			timePicker24Hour: true,
			autoUpdateInput: false,
			timePicker: true,
        	timePickerIncrement: 1,
			locale: {
				format: "DD/MM/YYYY",
				cancelLabel: 'Clear'
			}
		});

		$('input[name="daterange"]').on('apply.daterangepicker', function(ev, picker) {
			$(this).val(picker.startDate.format('DD/MM/YYYY HH:mm') + ' - ' + picker.endDate.format('DD/MM/YYYY HH:mm'));
			that.dateFilter = picker.startDate.format('DD/MM/YYYY HH:mm') + ' - ' + picker.endDate.format('DD/MM/YYYY HH:mm');
			that.clearSelection();
		});

		$('input[name="daterange"]').on('cancel.daterangepicker', function(ev, picker) {
		    $(this).val('');
		    that.dateFilter = '';
			that.clearSelection();
		});
	}

	setDateFilters(val: string) {
		this.clearSelection();
		this.dateFilter = val;
	}

	onChange(value: string, index: number) {
		this.clearSelection();
		this.filters[index] = value;
	}

	onTimerChange() {
		this.clearSelection();
	}

	private clearSelection() {
		this.selectAll = false;
		this.users.forEach(function(u: any) {
			u.manuallySelected = false;
			u.selected = false;
		});
	}

	getFormattedDate(date: string): string {
		var d: string;
		d = new moment(date).format('DD/MM/YY HH:mm');
		return d;
	}

	getTimer(interactionTime: string, receivedTime: string): string {
		var it: any = new moment(interactionTime);
		var rt: any = new moment(receivedTime);
		var now: any = new moment();

		var endOfWindow: any = new moment(interactionTime);
        endOfWindow.add(24, 'hours');

        if (endOfWindow.isAfter(now)){
          	var duration: any = moment.duration(endOfWindow.diff(now));
			return this.formatDuration(duration);
		} else if (rt.isBefore(it) || receivedTime == null) {
			var duration: any = moment.duration(it.diff(now));
			return this.formatDuration(duration);
		} else {
			var duration: any = moment.duration(it.diff(now));
			return this.formatDuration(duration);
		}
	}

	private formatDuration(duration: any): string {
		var hrs: string = String(duration.asHours()).split(".")[0];
		if(parseInt(hrs) < 0) {
			return duration.humanize(true);
		}
		var mins: number = Math.abs(duration.minutes());
		var ph: string = "";
		if (mins < 10) {
			ph = "0";
		}
		return hrs + "h" + ph + mins + "m to go";
	}

	getColour(interactionTime: string, receivedTime: string): string {
		var it: any = new moment(interactionTime);
		var rt: any = new moment(receivedTime);
		var now: any = new moment();

		var endOfWindow: any = new moment(interactionTime);
        endOfWindow.add(24, 'hours');

        if (endOfWindow.isAfter(now)){
          	return "green";
		} else if (rt.isBefore(it) || receivedTime == null) {
			return "orange";
		} else {
			return "red";
		}
	}

	getUsers() {
		this.userService.getUsers(this.companyCode)
						.subscribe(
							users => this.users = users);
	}

	headingClicked(head: number) {
		if(this.currentHead === head) {
          this.isReversed = !this.isReversed;
        } else {
          this.isReversed = false;
        }

		this.currentHead = head;

        switch(head) {
          case 0:
            this.orderField = 'firstName';
            break;
          case 1:
            this.orderField = 'gender';
            break;
          case 2:
            this.orderField = 'phoneNumber';
            break;
          case 3:
            this.orderField = 'email';
            break;
          case 4:
            this.orderField = 'preferredPosition';
            break;
          case 5:
            this.orderField = 'backupPosition';
            break;
          case 6:
            this.orderField = 'level';
            break;
          case 7:
            this.orderField = 'type';
            break;
          case 8:
            this.orderField = 'signedUpDate';
            break;
          case 9:
            this.orderField = 'interactionTime';
            break;
          case 10:
            this.orderField = '_id';
            break;
        }

	}

	isColDisplayed(head: number) {
		for(var _i = 0; _i < this.users.length; _i++) {

			switch(head) {
				case 2:
					if(this.users[_i].phoneNumber != null) {
		            	return true;
		        	}
		        	break;
		        case 3:
					if(this.users[_i].email != null) {
		            	return true;
		        	}
		        	break;
		        case 4:
					if(this.users[_i].preferredPosition != null) {
		            	return true;
		        	}
		        	break;
		        case 5:
					if(this.users[_i].backupPosition != null) {
		            	return true;
		        	}
		        	break;
		        case 6:
					if(this.users[_i].level != null) {
		            	return true;
		        	}
		        	break;
		        case 7:
					if(this.users[_i].type != null) {
		            	return true;
		        	}
		        	break;
			}
		}
		return false;
	}

	// updateSelectedItems(id: string) {
	// 	var match = $.grep(this.users, function(u){ return u._id === id; });
	// 	if (!match[0].selected) {
	// 		this.selectedItems.push(match[0]);
	// 		console.log(match[0].firstName + " " + match[0].lastName + " added to selected items");
	// 	} else {
	// 		var index = JSON.stringify(this.selectedItems).indexOf(id);
	// 		if(index < 0) {
	// 			console.log("Error: item was not currently in selected items");
	// 		} else {
	// 			this.selectedItems = this.selectedItems.filter(function(el: User) {
	// 				return el._id !== id;
	// 			})
	// 			console.log("Item removed from selected items");
	// 		}
	// 	}
	// 	console.log(this.selectedItems);
	// }
	onManualSelect(u: any) {
		u.manuallySelected = !u.manuallySelected;
	}

	createGroup() {
		this.selectedItems = [];
		var that = this;
		if(this.selectAll) {
			this.users.forEach(function(u: any) {
				if(u.selected) {
					that.selectedItems.push(u);
				}
			});
		} else {
			this.users.forEach(function(u: any) {
				if(u.manuallySelected) {
					that.selectedItems.push(u);
				}
			});
		}

		if(this.selectedItems.length === 0) {
			$('#errorModal').modal('show');
		} else {
			$('#myModal').modal('show');
		}

		console.log(this.selectedItems);
	}
}
