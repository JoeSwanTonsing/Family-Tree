OrgChart.templates.myTemplate = Object.assign({}, OrgChart.templates.diva);
OrgChart.templates.myTemplate.ripple = {
	radius: 100,
	color: "#0890D3",
  rect: null
};

OrgChart.templates.myTemplate.pointer = 
        '<g data-pointer="pointer" transform="matrix(0,0,0,0,100,100)">><g transform="matrix(0.3,0,0,0.3,-17,-17)">'
    + '<polygon fill="#0890D3" points="53.004,173.004 53.004,66.996 0,120" />'
    + '<polygon fill="#0890D3" points="186.996,66.996 186.996,173.004 240,120" />'
    + '<polygon fill="#0890D3" points="66.996,53.004 173.004,53.004 120,0" />'
    + '<polygon fill="#0890D3" points="120,240 173.004,186.996 66.996,186.996" />'
    + '<circle fill="#0890D3" cx="120" cy="120" r="30" />'
    + '</g></g>';
        
OrgChart.templates.myTemplate.pointer = 
        '<g data-pointer="pointer" transform="matrix(0,0,0,0,100,100)">><g transform="matrix(0.3,0,0,0.3,-17,-17)">'
    + '<polygon fill="#0890D3" points="53.004,173.004 53.004,66.996 0,120" />'
    + '<polygon fill="#0890D3" points="186.996,66.996 186.996,173.004 240,120" />'
    + '<polygon fill="#0890D3" points="66.996,53.004 173.004,53.004 120,0" />'
    + '<polygon fill="#0890D3" points="120,240 173.004,186.996 66.996,186.996" />'
    + '<circle fill="#0890D3" cx="120" cy="120" r="30" />'
    + '</g></g>';

var chart = new OrgChart(document.getElementById("tree"), {
	template: "myTemplate",
  enableSearch: false,
  enableDragDrop: true,
  mouseScrool: OrgChart.action.none,
  nodeMenu: {
    details: { text: "Details" },
    edit: { text: "Edit" },
    add: { text: "Add" },
    remove: { text: "Remove" }
  },
  nodeContextMenu: {
    edit: { text: "Edit", icon: OrgChart.icon.edit(18, 18, '#039BE5')  },
    add: { text: "Add Child", icon: OrgChart.icon.add(18, 18, '#FF8304') },
    remove: { text: "Remove", icon: OrgChart.icon.remove(18, 18, '#FF8304') }
  },
  dragDropMenu: {
    addInGroup: { text: "Add in group" },
    addAsChild: { text: "Add as child" }
  },
  menu: {
    pdf: { text: "Export PDF" },
    png: { text: "Export PNG" },
    svg: { text: "Export SVG" },
    csv: { text: "Export CSV" }
  },
	// nodeMenu: {
	// 	details: { text: "Details" },
 //    add: { text: "Add Child" },
 //    edit: { text: "Edit" },
 //    remove: { text: "Remove" },
 //  },
  nodeBinding: {
    field_0: "name",
    field_1: "title",
    img_0: "img"
  },
	nodes: [
		{ id: 1, name: "Amber McKenzie", title: "CEO", img: "https://cdn.balkan.app/shared/empty-img-blue.svg" },
		{ id: 2, pid: 1, name: "Ava Field", title: "IT Manager", img: "https://cdn.balkan.app/shared/empty-img-blue.svg"},
		{ id: 3, pid: 1, name: "Rhys Harper", img: "https://cdn.balkan.app/shared/empty-img-blue.svg" }
	]
});