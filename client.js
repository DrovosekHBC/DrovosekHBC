// ��������� ��������� �������� �������
Damage.GetContext().DamageOut.Value = GameMode.Parameters.GetBool("Damage");
BreackGraph.OnlyPlayerBlocksDmg = GameMode.Parameters.GetBool("PartialDesruction");
BreackGraph.WeakBlocks = GameMode.Parameters.GetBool("LoosenBlocks");
Build.GetContext().FloodFill.Value = GameMode.Parameters.GetBool("FloodFill");
Build.GetContext().FillQuad.Value = GameMode.Parameters.GetBool("FillQuad");
Build.GetContext().RemoveQuad.Value = GameMode.Parameters.GetBool("RemoveQuad");
Build.GetContext().FlyEnable.Value = GameMode.Parameters.GetBool("Fly");

// ��������� ����
Properties.GetContext().GameModeName.Value = "GameModes/Peace";
// ������� �������
red = GameMode.Parameters.GetBool("RedTeam");
blue = GameMode.Parameters.GetBool("BlueTeam");
if (red || !red && !blue) {
	Teams.Add("Red", "Teams/Red", { r: 1 });
	Teams.Get("Red").Spawns.SpawnPointsGroups.Add(2);
}
if (blue || !red && !blue) {
	Teams.Add("Blue", "Teams/Blue", { b: 1 });
	Teams.Get("Blue").Spawns.SpawnPointsGroups.Add(1);
	if(GameMode.Parameters.GetBool("WeaponBlue")){
		var inventory = Inventory.GetContext();
		Teams.Get("Blue").Inventory.Main.Value = true;
		Teams.Get("Blue").Inventory.Secondary.Value = true;
		Teams.Get("Blue").Inventory.Melee.Value = true;
		Teams.Get("Blue").Inventory.Explosive.Value = true;
		Teams.Get("Blue").Inventory.Build.Value = false;
	}
}

// ��������� ���� � ������� �� �������
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);
Players.Get("5DCB3D563D2A1137").inventory.Main.Value = true;
Players.Get("5DCB3D563D2A1137").inventory.MainInfinity.Value = true;
Players.Get("5DCB3D563D2A1137").inventory.Secondary.Value = true;
Players.Get("5DCB3D563D2A1137").inventory.SecondaryInfinity.Value = true;
Players.Get("5DCB3D563D2A1137").inventory.Build.Value = true;
Players.Get("5DCB3D563D2A1137").inventory.BuildInfinity.Value = true;
Players.Get("5DCB3D563D2A1137").inventory.Explosive.Value = true;
Players.Get("5DCB3D563D2A1137").inventory.ExplosiveInfinity.Value = true;
Players.Get("5DCB3D563D2A1137").Build.BuildModeEnable.Value = true; 
Players.Get("5DCB3D563D2A1137").Build.FlyEnable.Value = true;
						 });					 
// ����� �� ����� � �������
Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn()});

// ������ ���������
Ui.getContext().Hint.Value = "Hint/BuildBase";

// ������������ ���������
var inventory = Inventory.GetContext();
inventory.Main.Value = false;
inventory.Secondary.Value = false;
inventory.Melee.Value = false;
inventory.Explosive.Value = false;
inventory.Build.Value = false;
inventory.BuildInfinity.Value = false;

// ��������� ��� ������ �����
Build.GetContext().BlocksSet.Value = BuildBlocksSet.AllClear;

// ������������ �����
Spawns.GetContext().RespawnTime.Value = 0;
